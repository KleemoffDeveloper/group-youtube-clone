import VideoCard from './Cards/VideoCard';
import './Home.css'
import ModalWindow from './ModalWindow';
export default function Home({videos}){
    return (
        <div className="home">
            <ul className="card-list"> 
            {/* 
                If there are videos, they will display on the webpage
                If not, display an error message
                It's using a ternary operator
            */}
                {videos ? videos.map(video => <VideoCard data={video}/>) : (
                    <div>
                        <ModalWindow/>
                    </div>
                )}
            </ul>
        </div>
    );
}
