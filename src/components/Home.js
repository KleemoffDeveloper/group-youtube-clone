import VideoCard from './Cards/VideoCard';
import './Home.css'

export default function Home({videos}){
    console.log(videos);
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
                        <h1>Error. Something went wrong...</h1>
                    </div>
                )}
            </ul>
        </div>
    );
}


  