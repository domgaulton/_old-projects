import React from 'react';
import YouTubeA from 'react-youtube';

const PlayerA = ({ pAId, volume }) => {
  console.log(volume);

  if (volume !== currentVol) {
    //alert('change');
    // YouTubeA.event.target.setVolume(volume);
  }
  const currentVol = volume;

  function playerAReady(event) {
    // access to player in all event handlers via event.target
    console.log(event.target)
    event.target.playVideo();
    event.target.setVolume(80);
  };

  return (
    <div>
      <YouTubeA
        className="player"
        videoId={ pAId }
        onStateChange={ playerAReady } 
        volume={volume/10} />
    </div>
  )
};

export default PlayerA;