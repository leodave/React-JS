import { Link, Form, redirect } from "react-router"
import "./../styles/newPost.css"
function NewPost(){
   /* const [enteredBody, setEnteredBody] = useState('')
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
    }*/
    return(
        <Form method='post' className="form">
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name="body" required rows="10" ></textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type="text" id="name" name="name" required o></textarea>
            </p>
            <p className="actions">
                <Link to="/" className="cancel" type="button">Cancel</Link>
                <button>Submit</button>
            </p>
        </Form>
    );
}
export default NewPost;

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8081/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-Type': 'application/json'
        }
    })
    return redirect('/');
}

