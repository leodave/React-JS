import { useLoaderData } from "react-router";
import "./../styles/details.css"

function PostDetails(){
    const post = useLoaderData();
    return(
        <main className="details">
            <p className="name">{post.name}</p>
            <p className="body">{post.body} </p>
        </main>
    )
}
export default PostDetails;

export async function loader({params}){
    const response = await fetch('http://localhost:8081/posts/' + params.id);
    const resData = await response.json();
    return resData.post;
} 