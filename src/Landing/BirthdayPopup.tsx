// BirthdayPopup.tsx
import { useEffect, useState } from 'react';
import './BirthdayPopup.css';

const BirthdayPopup = ({ birthDateStr }: { birthDateStr: string }) => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showBirthday, setShowBirthday] = useState(false);
  const birthDate = new Date(birthDateStr);

  useEffect(() => {
    const now = new Date();
    const diff = birthDate.getTime() - now.getTime();

    if (diff > 0) {
      const timer = setTimeout(() => setCountdown(10), diff - 10000); // Start 10 sec before
      return () => clearTimeout(timer);
    }
  }, [birthDate]);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setShowBirthday(true);
      const timeout = setTimeout(() => {
        setShowBirthday(false);
      }, 4000); // Show for 4s
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => setCountdown(c => (c ?? 1) - 1), 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  if (countdown !== null && countdown > 0) {
    return <div className="birthday-popup countdown">{countdown}</div>;
  }

  if (showBirthday) {
    return (
      <div className="birthday-popup burst">
        <div className="fireworks" />
        <h1 className="birthday-text">🎉 Happy Birthday 🎉</h1>
      </div>
    );
  }

  return null;
};

export default BirthdayPopup;
