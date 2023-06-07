import { Link } from "react-router-dom";
import './NavBar.css';
import { useEffect, useState } from 'react';
import ResponsiveSearchbar from "./ResponsiveSearchbar";

function NavBar({ onSearch }) {
  const [searchIsOn, toggleSearchbar] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(search);
  }

  /**
   * useWindowSize function is from this source
   * https://designcode.io/react-hooks-usewindowsize-hook
   */
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    useEffect(() => {
      handleSize();

      window.addEventListener("resize", handleSize);

      return () => window.removeEventListener("resize", handleSize);
    }, []);

    return windowSize;
  };

  return (
    <header className="nav-header">
      <div className="nav-container" style={{ display: searchIsOn ? 'none' : '' }}>
        <ul className="menu-list">
          <li>
            <Link to="/" className="logo" onClick={() => {
              onSearch('')
            }}>
              {/* fa-beat */}
              <i class="fa-brands fa-youtube"><span>YouTube</span></i>
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={() => {
              onSearch('apex legends')
            }}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {
            useWindowSize().width <= 540 ?
              <img onClick={() => toggleSearchbar(!searchIsOn)} src="https://www.svgrepo.com/show/507852/search-circle.svg" className="search-toggle" />
              :
              (<form onSubmit={handleSearch} className="search">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Submit</button>
              </form>)
          }
        </ul>
      </div>

      {/* nav-container is default for devices  */}

      <div className="responsive-search-container" style={{ display: searchIsOn ? '' : 'none' }}>
        <ResponsiveSearchbar
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          toggle={toggleSearchbar}
        />
      </div>
    </header>
  )
}


export default NavBar;
