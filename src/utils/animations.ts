import { easeInOut } from 'motion/react';

export const slideFadeDown = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0,  y: -12, transition: { duration: 0.5 } }
};

export const scaleFade = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: .5 } },
  exit: { opacity: 0,  scale: 0.9, transition: { duration: .5 } }
};

export const textTransition = {
  initial: { filter: 'blur(4px)', opacity: 0 },
  animate: { filter: 'blur(0px)', opacity: 1,transition: { duration: 0.5 } },
  exit: { filter: 'blur(4px)', opacity: 0,transition: { duration: .5 } }
};

export const sectionMotion = {
  initial: { opacity: 0, y: 0 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  viewport: { once: true, amount: .12 },
};






export const scaleOpacity = {
  initial: { opacity: 0, },
  animate: { opacity: 1,},
  exit: { opacity: 0, },
  transition: { duration:  .5},
};

export const expandFade = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.5, ease: easeInOut },
};


