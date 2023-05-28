import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
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
    <Home videos={videos.items}/>
  );
}

export default App;
