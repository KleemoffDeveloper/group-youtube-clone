import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './View.css'


function View() {
  const {id} = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,contentDetails&key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    video ? 
    <div className="view">
      <div className="video-player">
        <iframe 
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder="0" 
        >
        </iframe>
      </div>
      <h1>{video.snippet.title}</h1>
    </div>
    :
    <p>Loading</p>
  );
}

export default View;