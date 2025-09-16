import { useState, useEffect } from 'react';

export const useCounter = (start, end, duration = 2000) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    const startTime = Date.now();
    const difference = end - start;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(start + difference * easeOutCubic));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end, duration]);

  return count;
};