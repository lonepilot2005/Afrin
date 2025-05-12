import  { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Music.css';

type MusicProps = {
  audioSrc: string;
};

const Music = ({ audioSrc }: MusicProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

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
