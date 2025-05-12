import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Layout.css';
import audioFile from './stephen-sanchez-until-i-found-you-piano-cover-by-pianella-piano_c3CHF8fk.mp3'; // Import the audio file

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Check if on the home page
  const isEditPage = location.pathname === '/edit'; // Check if on the edit page
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(isHomePage); // Show the prompt only on the home page
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to play the music
  const playMusic = () => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Audio play error:', error);
      });
      setIsMusicPlaying(true);
      setShowPlayPrompt(false); // Hide the prompt once music starts
    }
  };

  // Stop music if on the edit page
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  useEffect(() => {
    if (isEditPage) {
      stopMusic(); // Stop music on the edit page
    } else {
      if (audioRef.current && isMusicPlaying) {
        audioRef.current.play();
      }
    }
  }, [isEditPage, isMusicPlaying]);

  return (
    <>
      {showPlayPrompt && (
        <div className={`popup ${showPlayPrompt ? 'show' : ''}`}>
          <div className="message">Would you like to hear some music?</div>
          <button className="play-btn" onClick={playMusic}>
            🎶
          </button>
        </div>
      )}
      <audio ref={audioRef} src={audioFile} loop />
      {children}
    </>
  );
};

export default Layout;
