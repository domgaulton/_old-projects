import React from 'react';
import YouTubeB from 'react-youtube';
  
function playerBReady(event) {
  // access to player in all event handlers via event.target
  // console.log(event.target);
  event.target.playVideo();
  event.target.setVolume(80);
};

const PlayerB = ({ pBId, volume }) => {
  return (
    <div>
      <YouTubeB
        className="player"
        videoId={ pBId }
        onStateChange={ playerBReady } />
    </div>
  )
};

export default PlayerB;