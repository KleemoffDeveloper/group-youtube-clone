import VideoCard from './Cards/VideoCard';
import './Home.css'
import ModalWindow from './ModalWindow';

export default function Home({videos = []}){
    return (
        <div className="home">
            <ul className="card-list"> 
                {videos.map((video) => (
                    <VideoCard
                        data={video}
                        key={video.id.videoId}                    
                    />    
                ))}
            </ul>
        </div>
    );
}


  