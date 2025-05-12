import React from 'react';
import { motion } from 'framer-motion';
import './Overlay.css'

const Overlay = ({ children, backgroundColor = 'rgba(0,0,0,0.6)' }) => {
  return (
    <motion.div
      className="overlay-template"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ backgroundColor }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
