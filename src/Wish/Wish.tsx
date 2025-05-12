import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';
import './Wish.css';
import { useNavigate } from 'react-router-dom';

function Wish() {
  const photos = [img1, img2, img3, img4];
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    navigate('/edit');
  };

  return (
    <motion.div
      className='wish-container'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='wish-top'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h1 className="romantic-wish">A Toast to the Goddess of My Universe 💖</h1>
        <p className="top-message">A Love Brighter than the Stars, a Soul More Powerful than Time</p>
      </motion.div>

      <motion.div
        className='wish-down'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div
          className='photo-section'
          onClick={() => setShowPopup(true)}
        >
          <p className="hover-msg">Tap to see memories</p>
        </div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              className='photo-grid-popup'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="photo-scroll-container">
                {photos.concat(photos).map((src, idx) => (
                  <img key={idx} src={src} alt={`Memory ${idx + 1}`} className="gallery-photo" />
                ))}
              </div>
              <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        className="bottom-heart"
        onClick={handleNext}
        whileTap={{ scale: 0.9 }}
      >
        💓
      </motion.button>
    </motion.div>
  );
}

export default Wish;
