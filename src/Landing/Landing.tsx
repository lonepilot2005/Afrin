import './Landing.css';
import flake from './flakes.svg';
import { motion } from 'framer-motion';
import SwipeSlider from './SwipeSlider';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function generateStars(count = 50) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 15 + 2;
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const rotate = Math.random() * 360;

    stars.push(
      <motion.span
        key={i}
        style={{
          position: 'absolute',
          left: `${left}%`,
          top: `-${size}px`,
          fontSize: `${size}px`,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        animate={{
          y: '110vh',
          rotate: rotate + 180,
          opacity: [0, 1, 0.8, 1, 0],
        }}
        transition={{
          delay,
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <img src={flake} alt="" className="flake-img" />
      </motion.span>
    );
  }
  return stars;
}

function AgeTimer() {
  const [age, setAge] = useState<string>('Loading...');
  const birthDate = new Date('2004-05-13T00:00:00Z');

  function calculateAge() {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setAge(
      `♡ ${years} years - ${months} months - ${days} days 🕯 ` +
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    );
  }

  useEffect(() => {
    calculateAge();
    const interval = setInterval(calculateAge, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className="age-display"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      {age}
    </motion.span>
  );
}

// const [dynamicBirth, setDynamicBirth] = useState<string | null>(null);

//   useEffect(() => {
//     const now = new Date();
//     const fake = new Date(
//       now.getFullYear() - 21,
//       now.getMonth(),
//       now.getDate(),
//       now.getHours(),
//       now.getMinutes(),
//       now.getSeconds() + 10
//     );
//     setDynamicBirth(fake.toISOString());
//   }, []);


function Landing() {
  const navigate = useNavigate();
  
  const handleSlide = () => {
    navigate('/wish');
  }

  return (
    <div className="main-container">
      <div className="center-content">
        <span className="main-title">Afrin Tharun</span>
        <AgeTimer />
        <SwipeSlider onSwipe={handleSlide}/>
        {/* <BirthdayPopup birthDateStr={fakeBirth.toISOString()} />
         */}
         {/* {dynamicBirth && <BirthdayPopup birthDateStr={dynamicBirth} />} */}

         {/* {dynamicBirth && <BirthdayPopup birthDateStr={dynamicBirth} />} */}


      </div>
      <div className="stars-wrapper">{generateStars(80)}</div>
    </div>
  );
}

export default Landing;