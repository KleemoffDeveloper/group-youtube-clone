import logo from './logo.svg';
import './App.css';
import About from "./components/About.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import read_videos from './fetchApi';

function App() {
  const [videos, setVideos] = useState({})
  const [searchQuery, setSearchQuery] = useState('apex legends');

  useEffect(() => {
    read_videos(searchQuery, (data) => {
      console.log(data.items)
      setVideos(data)
    })
  }, [searchQuery])


  const handleSearch = (search) => {
    setSearchQuery(search);
  }

  return (
    <div className="container"> 
      <Router>
        <NavBar onSearch={handleSearch}/>
        
        <Routes>
          <Route path="/" element={<Home videos={videos.items}/>} />
          <Route path="/home" element={<Home videos={videos.items}/>} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;