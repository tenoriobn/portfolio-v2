import { useEffect, useRef, useState } from 'react';
import type { SwiperRef } from 'swiper/react';

export const useSlideContinuousMove = (itemsLength: number) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startAnimation = () => {
    if (swiperRef.current && swiperRef.current.swiper && !intervalRef.current && !isDragging) {
      const swiper = swiperRef.current.swiper;
      
      const continuousMove = () => {
        if (swiper && !swiper.destroyed && !isDragging) {
          swiper.setTranslate(swiper.translate - 1);
          if (swiper.translate <= -swiper.slides[0].offsetWidth * itemsLength) {
            swiper.setTranslate(0);
          }
        }
      };

      intervalRef.current = setInterval(continuousMove, 16);
    }
  };

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    stopAnimation();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!isPaused) {
      setTimeout(() => startAnimation(), 100);
    }
  };

  useEffect(() => {
    if (!isPaused && !isDragging) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsLength, isPaused, isDragging]);

  return { 
    swiperRef, 
    toggleAnimation, 
    isPaused,
    isDragging,
    handleTouchStart,
    handleTouchEnd
  };
};