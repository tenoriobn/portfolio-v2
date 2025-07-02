import { Variants, easeInOut } from 'motion/react';

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









export const scaleOpacity = {
  initial: { opacity: 0, },
  animate: { opacity: 1,},
  exit: { opacity: 0, },
  transition: { duration:  .5},
};















export const textTransition = {
  initial: { opacity: 0, filter: 'blur(4px)',},
  animate: { opacity: 1, filter: 'blur(0px)',},
  exit: { opacity: 0, filter: 'blur(4px)',},
  transition: { duration: .5 },
};

export const expandFade = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.5, ease: easeInOut },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .6,
      ease: [0.39, 0.24, 0.3, 1],
    },
  },
};

export const sectionMotionProps = {
  variants: fadeInUp,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: .12 },
};
