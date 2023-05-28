import { Link } from "react-router-dom";
import './NavBar.css'
import { useState } from 'react';

function NavBar ({onSearch}) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(search);
  }

  return (
    <header className="nav-header">
      <ul className="menu-list">
        <li>
          <Link to="/" className="logo">
            <i class="fa-brands fa-youtube fa-beat"></i>
            <span>YouTube</span>
          </Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <form onSubmit={handleSearch} className="search">
        <input 
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    </header>
  )
}
 

export default NavBar;
