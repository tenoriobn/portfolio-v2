import { useState, useEffect, useCallback } from 'react';

const MOBILE_BREAKPOINT = 992;
const DEBOUNCE_DELAY = 150;

export const useMobile = (): boolean => {
  const getIsMobile = useCallback((): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = (): void => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const currentIsMobile = getIsMobile();
        setIsMobile(prevIsMobile => {
          if (prevIsMobile !== currentIsMobile) { return currentIsMobile; }
          return prevIsMobile;
        });
      }, DEBOUNCE_DELAY);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [getIsMobile]);

  return isMobile;
};