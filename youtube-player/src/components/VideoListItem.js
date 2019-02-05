import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  // NOTE: pass the prop as a constant otherwise onUserSelected is undefined when you click
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;
  //console.log(onUserSelected);

  return (
    // Add onClick event handler on li element. When clicked it passes the video to onUserSelected function.
    // The onUserSelected prop in VideoList.js passes it back to onVideoSelect in App.js
    <li onClick={() => onUserSelected(video)} className='list-group-item'>
      <div className='video-list-media'>
        <div className='media-left'>
          <img alt='' className='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;