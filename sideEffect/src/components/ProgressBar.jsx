import { useState, useEffect } from 'react';
const TIMER = 3000;

export default function ProgressBar() {
  const [remianingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remianingTime} max={TIMER} />;
}
