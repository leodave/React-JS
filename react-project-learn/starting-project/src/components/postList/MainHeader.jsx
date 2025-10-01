
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router';

import './../../styles/header.css'

function MainHeader() {
  return (
    <header className="header">
      <Link to='/'className="logo">
        <MdMessage />
        React Poster
      </Link>
      <p>
        <Link to="/create-post" className="button">
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;