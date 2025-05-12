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
      {/* Background stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: Math.random() * 3,
            duration: 2,
            repeat: Infinity,
          }}
        />
      ))}

    {/* Floating hearts with sway using emoji */}
{[...Array(12)].map((_, i) => (
  <motion.div
    key={`heart-${i}`}
    className="heart-emoji"
    initial={{ y: 300, opacity: 0 }}
    animate={{ y: -300, opacity: [0, 1, 1, 0], x: [0, 20, -20, 0] }}
    transition={{
      delay: i * 0.3,
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
    style={{
      position: 'absolute',
      fontSize: '1.5rem',
      left: `${Math.random() * 90}%`,
      top: `${Math.random() * 30 + 20}%`,
    }}
  >
    ❤️
  </motion.div>
))}


      {/* Glowing text message */}
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
