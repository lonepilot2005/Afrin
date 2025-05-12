import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import './SwipeSlider.css';

type SwipeSliderProps = {
  onSwipe: () => void;
};

function SwipeSlider({ onSwipe }: SwipeSliderProps) {
  const x = useMotionValue(0);
  const fillWidth = useTransform(x, [0, 220], ['0%', '100%']);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.point.x > 180) {
      onSwipe();
    }
  };

  return (
    <div className="slider-wrapper">
      <motion.div className="slider-track">
        <motion.div className="slider-fill" style={{ width: fillWidth }} />

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
