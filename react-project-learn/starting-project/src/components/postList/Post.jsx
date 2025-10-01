import "./../../styles/postList.css"
import { Link } from "react-router-dom";
function Post({id, name, body}) {
    return (
        <li className= "post">
            <Link className= "a" to={id}>
            <p className="author">{name}</p>
            <p className="text">{body}</p>
            </Link>
           
        </li>
    );
    
}
export default Post;