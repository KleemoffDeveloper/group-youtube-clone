import { useEffect, useState } from 'react';
import './VideoCard.css'

/**
 * THE VIDEO DURATION FORMAT IS SO WEIRD BUT I FOUND A SOLUTION ON GITHUB
 * https://gist.github.com/Fauntleroy/5167736
 */

export default function VideoCard({ data }) {
    const contentDetailsURL = `https://www.googleapis.com/youtube/v3/videos?id=${data.id.videoId}&part=contentDetails&key=${process.env.REACT_APP_API_KEY}`
    const [duration, setDuration] = useState('00:00')
    const [contentDetails, setContentDetails] = useState({})

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

    useEffect(() => {
        fetch(contentDetailsURL)
        .then(response => response.json())
        .then(m_data => {
            setContentDetails(m_data.items[0].contentDetails)
            //console.log(`${data.id.videoId}, ${m_data.items[0].id}`)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const titles = (array) => {
        return array.map(obj => obj.snippet.title)
    }

    return (
        <div className="video-card">
            <img src={data.snippet.thumbnails.medium.url} />
            <div className='video-time'>
                {convertYoutubeDuration(contentDetails.duration)}
            </div>
            <div>
                <b>{data.snippet.title}</b>
                <br/>
                <b className='channel-title'>
                    {data.snippet.channelTitle}
                </b>
            </div>
        </div>
    );
}