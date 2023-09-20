
import { useEffect } from 'react';

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VideoPlayer({ playVideo, hideVideoModal, videoURL }) {

  useEffect(() => {
    
  },[])


  return (
    <>
      <ReactPlayer
        playing={playVideo}
        url={videoURL}
        height={750}
      />

      <button onClick={hideVideoModal} className='absolute top-2 md:top-10 right-2 md:right-10 video-player-dialog-close-btn'>
        <img
            src="/images/global/close-icon.png"
            alt="close icon"
            width={35}
            height={35}
        />
      </button>
    </>
  );
}