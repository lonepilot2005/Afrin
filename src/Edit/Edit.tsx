import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Edit.css';
import edit from './edit.mp4';
import { useNavigate } from 'react-router-dom';

const flyingEmojis = ['💖', '🎈', '💕', '❤️'];

const Edit = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 1;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = Number(e.target.value);
    }
  };

  return (
    <div className="edit-video-wrapper">
      {/* Flying emojis */}
      {flyingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="flying-emoji"
          initial={{ y: 50, opacity: 1 }}
          animate={{ y: -200, opacity: 0 }}
          transition={{ duration: 4 + i, delay: i * 0.8, repeat: Infinity }}
          style={{ left: `${10 + i * 20}%` }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Video player */}
      <motion.div
        className="video-player-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          className="anime-video"
          src={edit}
          poster="/video-cover.jpg"
          autoPlay
          playsInline
        />

        {/* Custom Controls */}
        <motion.div
          className="video-controls"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="play-btn"
            onClick={togglePlay}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>

          <div className="progress-bar">
            <motion.div className="progress" style={{ width: `${progress}%` }} />
          </div>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.div
        className="next-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="https://media.tenor.com/d2j7YdyhtmsAAAAj/shikanoko-dance-shikanoko-meme.gif" alt="Next" onClick={()=>{navigate('/last')}} />
      </motion.div>
    </div>
  );
};

export default Edit;
