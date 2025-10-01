import './../../styles/postList.css'
import Post from './Post';
import { useEffect, useState } from 'react';
function PostList(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8081/posts')
            const resData = await response.json();
            setPosts(resData.posts)
        }
        fetchPosts();
    }, [])
    
    
    return (
        <div> 
              <ul className="postsList">
                    {posts.map((post)=> <Post 
                        key={post.id} 
                        id={post.id}
                        name={post.name} 
                        body={post.body}/>)}
                </ul>  
         </div>
    );
}

export default PostList;