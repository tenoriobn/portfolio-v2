import { easeInOut } from 'motion';

export const scaleFade = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration:  .075},
};

export const slideFadeDown = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration:  .075 },
};

export const textTransition = {
  initial: { opacity: 0, y: 20, scale: 0.95, filter: 'blur(4px)',},
  animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',},
  exit: { opacity: 0, y: -20, scale: 0.95, filter: 'blur(4px)',},
  transition: { duration: .5 },
};

export const expandFade = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.5, ease: easeInOut },
};