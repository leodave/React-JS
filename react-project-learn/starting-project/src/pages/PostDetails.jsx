import { useLoaderData } from "react-router";
import { useNavigate } from 'react-router-dom';
import "./../styles/details.css"

function PostDetails(){
    const post = useLoaderData();
    const navigate = useNavigate();
    async function deletePost(postId){
        console.log(postId);
        const res = await fetch('http://localhost:8081/posts/' + postId, {
            method: 'Delete',
        });
        if (!res.ok) {
            throw new Error(`Delete failed: ${res.status}`);
        }
          // e.g. reload, refetch, or navigate
        console.log(`Post ${postId} deleted`);
        navigate('/'); 
    }
    return(
        <main className="post">
            <p className="name">{post.name}</p>
            <p className="body">{post.body} </p>
            <button className="delete" onClick={() => deletePost(post.id)}>Delete</button>

        </main>
    )
}
export default PostDetails;

export async function loader({params}){
    const response = await fetch('http://localhost:8081/posts/' + params.id);
    const resData = await response.json();
    return resData.post;
} 