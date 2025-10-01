
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router';

import './../../styles/header.css'

function MainHeader() {
  return (
    <header className="header">
      <h1 className="logo">
        <MdMessage />
        React Poster
      </h1>
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