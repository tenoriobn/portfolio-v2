import { useEffect, useState } from 'react';

export function useRotatingText(length: number, intervalMs = 5000) {
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    if (length === 0) return;

    const interval = setInterval(() => {
      setActiveTextIndex((prev) => (prev + 1) % length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [length, intervalMs]);

  return activeTextIndex;
}
