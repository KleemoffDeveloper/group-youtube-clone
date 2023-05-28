import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import read_videos from './fetchApi';

function App() {

  const [videos, setVideos] = useState({})

  useEffect(() => {
    read_videos('apex legends', (data) => {
      console.log(data.items)
      setVideos(data)
    })
  }, [])

  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home videos={videos.items}/>} />
        <Route path="/home" element={<Home videos={videos.items}/>} />
        {/* <Route path="/about" element={<About />} />  */}
      </Routes>

    </Router>
  );
}

export default App;