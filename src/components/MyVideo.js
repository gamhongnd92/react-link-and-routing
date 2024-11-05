import React from "react";
import ReactPlayer from "react-player";
function MyVideo() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=LZhgiJWS-ao"
      playing={false}
      volume={0.5}
    />
  );
}
export default MyVideo;
