import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './VideoCard.css'

/**
 * THE VIDEO DURATION FORMAT IS SO WEIRD BUT I FOUND A SOLUTION ON GITHUB
 * https://gist.github.com/Fauntleroy/5167736
 */

export default function VideoCard({ data }) {
    return (
        <div className="video-card">
            <Link to={`/video/${data.id.videoId}`}>
                <div className='video-thumbnail'>
                    <img src={data.snippet.thumbnails.high.url} />
                </div>
                <div className='video-details'>
                    <p className='video-title'>{data.snippet.title}</p>
                    <p className='channel-title'>
                        {data.snippet.channelTitle}
                    </p>
                </div>
            </Link>
        </div>
    );
}