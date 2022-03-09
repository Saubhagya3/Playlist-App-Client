import React, { useState, useEffect } from 'react'
import VideoItem from './VideoItem'
import "../styles/Videos.css"

export default function Videos () {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetch("/api/getAllVideos")
        .then((res) => res.json())
        .then((data) => setVideoData(data));
    }, []);

    return(
        <div className='vidList'>
            {!videoData ? "Loading..." : 
            videoData.map(video => {
                return(<VideoItem videoData={video} />)
            })}
        </div>
    )
}