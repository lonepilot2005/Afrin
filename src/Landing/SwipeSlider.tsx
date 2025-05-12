import { motion, useMotionValue, useTransform } from 'framer-motion';
import './SwipeSlider.css';

function SwipeSlider({ onSwipe }) {
  const x = useMotionValue(0);
  const fillWidth = useTransform(x, [0, 220], ['0%', '100%']);

  const handleDragEnd = (_, info) => {
    if (info.point.x > 180) {
      onSwipe(); // Trigger the page change
    }
  };

  return (
    <div className="slider-wrapper">
      <motion.div className="slider-track">
        {/* Filling background */}
        <motion.div className="slider-fill" style={{ width: fillWidth }} />

        {/* Draggable slider thumb */}
        <motion.div
          className="slider-thumb"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: 0, right: 220 }}
          onDragEnd={handleDragEnd}
          whileTap={{ scale: 0.95 }}
        >
          slide →
        </motion.div>

        <span className="slider-text">Swipe to reveal your surprise</span>
      </motion.div>
    </div>
  );
}

export default SwipeSlider;
