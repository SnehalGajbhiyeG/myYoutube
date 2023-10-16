import React from 'react'

const VideoCart = ({ info }) => {


  if (!info || !info.snippet) {
    // Handle the case where 'info' or 'info.snippet' is undefined
    return null;
  }

  const { snippet, statistics } = info;

  if (!snippet.channelId || !snippet.title || !snippet.thumbnails) {
    // Handle the case where 'channelId', 'title', or 'thumbnails' are missing
    return null;
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCart