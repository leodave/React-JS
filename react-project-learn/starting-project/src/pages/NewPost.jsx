import { useState } from "react"
import "./../styles/newPost.css"
function NewPost({onCancel, onAddPost}){
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredName, setEnteredName] = useState('')
    
    function enteredBodyHandler(event){
        setEnteredBody(event.target.value)
    }
    function enteredNameHandler(event){
        setEnteredName(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body : enteredBody,
            name : enteredName
        }
        onAddPost(postData);
        onCancel();
    }
    return(
        <form className="form" onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows="10" onChange={enteredBodyHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" required onChange={enteredNameHandler}></textarea>
            </p>
            <p className="actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}
export default NewPost;