import React, { useState, useRef } from "react";
import vid from "../assets/vid.mp4";
function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="relative snap-y snap-start ">
      <video
        onClick={onVideoPress}
        ref={videoRef}
        className="w-[100vh] h-[85vh] object-fill"
        src={vid}
        alt="Reel video"
        loop
      />
    </div>
  );
}
export default VideoCard;
