import React from 'react';
import { motion } from 'framer-motion';
import './Last.css';

function Last() {
  return (
    <motion.div
      className="last-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Floating hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="heart"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -300, opacity: 1 }}
          transition={{
            delay: i * 0.3,
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Final Message */}
      <motion.h1
        className="farewell-text"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Thank You for Being My Forever 💞
      </motion.h1>

      <motion.p
        className="subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        Here's to us, always. 🌙✨
      </motion.p>
    </motion.div>
  );
}

export default Last;
