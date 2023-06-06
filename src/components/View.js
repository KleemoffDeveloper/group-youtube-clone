import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import read_videos  from '../fetchApi'
import './View.css';

function View() {
  const {id} = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    read_videos(id, data => {
      setVideo(data.items[0]);
      setLoading(false);
    });
  }, [id]);

  return (
    !loading && video ? 
    <div className="view">
      <div className="video-player">
        <iframe 
          title={video.snippet.title}
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder="0" 
        >
        </iframe>
      </div>
      <h1>{video.snippet.title}</h1>
    </div>
    :
    <p>Loading...</p>
  );
}

export default View;
