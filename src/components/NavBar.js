import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar () {
  return (
    <header>
      <ul className="menu">
        <li>
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <form>
            <input 
              className="search-bar"
              type="text"
              placeholder="Search"
            />
            <button className="search-button" type="submit">Search</button>
          </form>
        </li>
      </ul>
    </header>
  )
}
 
 

export default NavBar;
