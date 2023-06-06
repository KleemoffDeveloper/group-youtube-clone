import logo from './logo.svg';
import './App.css';
import About from "./components/About.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import read_videos from './fetchApi';
import View from "./components/View.js"



function App() {
  const [videos, setVideos] = useState({})

  useEffect(() => {
    read_videos('', (data) => {
      console.log(data.items)
      setVideos(data)
    })
  }, [])


  const handleSearch = (search) => {
    // setSearchQuery(search);
    read_videos(search, (data) => {
      console.log(data.items)
      setVideos(data)
    })
  }

  return (
    <div className="container"> 
      <Router>
        <NavBar onSearch={handleSearch}/>        
        <Routes>
          <Route path="/" element={<Home videos={videos.items || []}/>} />
          <Route path="/home" element={<Home videos={videos.items || []}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;