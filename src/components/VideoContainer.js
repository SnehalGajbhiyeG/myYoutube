import React from 'react'
import { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCart from './VideoCart';
import { Link } from "react-router-dom"; 

function VideoContainer() {

  const [videos, setVideos] = useState([]); 

  useEffect(() => {

    getVideos(); 

  },[]); 

  

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json.items);
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  } 


  return (
    <div className='flex flex-wrap'>
      {/* <VideoCart info={videos[0]}/> */}
       {videos.map((video) => (
       
         <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCart info={video} /> </Link>
         
         ))} 
    </div>
  )
}

export default VideoContainer