import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Music.css'

const Music = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player">
      <motion.div
        className={`disc ${playing ? 'rotate' : ''}`}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
      >
        🎵
      </motion.div>
      <audio ref={audioRef} src={audioSrc} loop />
    </div>
  );
};

export default Music;
