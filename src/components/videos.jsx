import React ,{useState}from 'react'

const videos = () => {
    const [videos,setVideos] = useState(null)
  return (
    <div>videos
    <button onClick={()=>{setVideos([1,2,3])}}>send</button>

    </div>
  )
}

export default videos