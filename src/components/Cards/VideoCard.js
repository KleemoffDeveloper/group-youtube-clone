import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './VideoCard.css'

/**
 * THE VIDEO DURATION FORMAT IS SO WEIRD BUT I FOUND A SOLUTION ON GITHUB
 * https://gist.github.com/Fauntleroy/5167736
 */

export default function VideoCard({ data }) {
    const contentDetailsURL = `https://www.googleapis.com/youtube/v3/videos?id=${data.id.videoId}&part=contentDetails&part=statistics&key=${process.env.REACT_APP_API_KEY}`
    const [duration, setDuration] = useState("00:00")
    const [statistics, setStatistics] = useState({})

    // Converts YouTube API format video duration to normal duration (no clue why they did that)
    function convertYoutubeDuration(duration) {
        const time_extractor = /^P([0-9]*D)?T([0-9]*H)?([0-9]*M)?([0-9]*S)?$/i;
        const extracted = time_extractor.exec(duration);
        if (extracted) {
            const days = parseInt(extracted[1], 10) || 0;
            const hours = parseInt(extracted[2], 10) || 0;
            const minutes = parseInt(extracted[3], 10) || 0;
            const seconds = parseInt(extracted[4], 10) || 0;

            return (`${days ? (days) + "d:" : ""}${hours ? (hours) + "h:" : ""}${minutes ? (minutes) + "m" + (seconds ? ":" : "") : ""}${seconds ? (seconds) + "s" : ""}`)
        }
        return null;
    }

    // Fetches the content details - gives video duration
    useEffect(() => {
        fetch(contentDetailsURL)
        .then(response => response.json())
        .then(m_data => {
            setDuration(convertYoutubeDuration(m_data.items[0].contentDetails.duration))
            setStatistics(m_data.items[0].statistics)
        })
        .catch(error => {
            console.log(error)
        })
    })

    return (
        <div className="video-card">
            <Link to={`/video/${data.id.videoId}`}>
                <div className='video-thumbnail'>
                <img src={data.snippet.thumbnails.medium.url} />
                </div>
                <div className='video-time'>
                    {duration ? duration : "LIVE"}
                </div>
                <div className='video-details'>
                    <p className='video-viewCount'>{Number(statistics.viewCount).toLocaleString('us')} views</p>
                    <p className='video-title'>{data.snippet.title}</p>
                    <p className='channel-title'>
                        {data.snippet.channelTitle}
                    </p>
                </div>
            </Link>
        </div>
    );
}