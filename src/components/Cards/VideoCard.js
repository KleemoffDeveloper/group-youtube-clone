import { useEffect } from 'react';
import './VideoCard.css'

export default function VideoCard({ data }) {
    useEffect(() => {
        
    }, [])

    return (
        <div className="video-card">
            <img src={data.snippet.thumbnails.medium.url} />
            <div className='video-time'>
                {'00:00'}
            </div>
            <p>
                <b>{data.snippet.title}</b>
                <div className='channel-title'>
                    {data.snippet.channelTitle}
                </div>
            </p>
        </div>
    );
}