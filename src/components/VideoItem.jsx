import "../styles/VideoItem.css"

export default function VideoItem (videoData) {
    console.log(videoData.videoData.name)
    return (
        <div className="container">
            <div className="image">
                <img src={videoData.videoData.thumbnail} alt="" />
            </div>
            <p>Name: {videoData.videoData.name}</p>
        </div>
    )
}