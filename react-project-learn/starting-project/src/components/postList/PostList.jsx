import './../../styles/postList.css'
import Post from './Post';
import NewPost from '../../pages/NewPost';
import { useEffect, useState } from 'react';
function PostList({showNewPost, onStopPosting}){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8081/posts')
            const resData = await response.json();
            setPosts(resData.posts)
        }
        fetchPosts();
    }, [])
    function addPostHandler(postData){
        fetch('http://localhost:8081/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'content-Type': 'application/json'
            }
        })
        setPosts((existingPosts => [postData, ...existingPosts]))
    }
    
    return (
        <div> 
            {showNewPost ? < NewPost    
                                        onCancel = {onStopPosting}
                                        onAddPost= {addPostHandler}
                                /> 
                            :   <ul className="postsList">
                                    {posts.map((post)=> <Post key={post.body} author={post.name} body={post.body}/>)}
                                </ul> 
            } 
         </div>
    );
}

export default PostList;