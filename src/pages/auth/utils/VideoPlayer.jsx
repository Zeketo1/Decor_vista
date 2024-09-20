import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
const VideoPlayer = ({ src, className }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (e) {
          console.error("Error playing video:", e.message);
        }
      }
    };
    playVideo();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      controls={false}
      muted
      loop
    ></video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default VideoPlayer;
