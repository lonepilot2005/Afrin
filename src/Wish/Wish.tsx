import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpeg';
import './Wish.css';
import { useNavigate } from 'react-router-dom';

function Wish() {
  const photos = [img1, img2, img3, img4,img5,img6];
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleNext = () => {
    navigate('/edit');
  };

  const changePhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  return (
    <motion.div
      className='wish-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating hearts background */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart"
            initial={{ y: 0, x: Math.random() * 100, opacity: 0 }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 5
            }}
          >
            {['💖', '💗', '💓', '💘'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className='wish-top'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <h1 className="romantic-wish">My Dearest Love 💖</h1>
        <motion.p 
          className="top-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You make my world brighter than a thousand stars
        </motion.p>
      </motion.div>

      <motion.div
        className='wish-down'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <motion.div
          className='photo-section'
          onClick={() => setShowPopup(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onDoubleClick={changePhoto}
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 3 
          }}
        >
          <img 
            src={photos[currentPhoto]} 
            alt="Our memory" 
            className="main-photo"
          />
          <motion.p 
            className="hover-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Tap to see more memories
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              className='photo-grid-popup'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <motion.div 
                className="photo-scroll-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {photos.concat(photos).map((src, idx) => (
                  <motion.img 
                    key={idx} 
                    src={src} 
                    alt={`Memory ${idx + 1}`} 
                    className="gallery-photo"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * (idx % 4) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </motion.div>
              <motion.button 
                className="close-popup" 
                onClick={() => setShowPopup(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        className="bottom-heart"
        onClick={handleNext}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        💖
        <motion.span 
          className="heart-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>
    </motion.div>
  );
}

export default Wish;