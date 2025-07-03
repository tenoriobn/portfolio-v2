import { Variants } from 'motion/react';

export const slideFadeDown = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0, transition: { duration: .25 } },
  exit: { opacity: 0,  y: -12, transition: { duration: .25 } }
};

export const scaleFade = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: .15 } },
  exit: { opacity: 0,  scale: 0.9, transition: { duration: .15 } }
};

export const textTransition = {
  initial: { filter: 'blur(4px)', opacity: 0 },
  animate: { filter: 'blur(0px)', opacity: 1,transition: { duration: .25 } },
  exit: { filter: 'blur(4px)', opacity: 0,transition: { duration: .25 } }
};

export const sectionMotion = {
  initial: { opacity: 0, },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  viewport: { 
    once: true, 
    amount: .12 
  },
};


export const overlayModalFadeDown = {
  initial: { 
    opacity: 0, 
    overflow: 'hidden', 
    transition: { 
      duration: .25,
      overflow: { delay: 5 }
    }
  },
  animate: { 
    opacity: 1, 
    overflow: 'hidden auto', 
    transition: { 
      duration: .25,
    }
  },
  exit: { 
    opacity: 0, 
    overflow: 'hidden', 
    transition: { 
      duration: .25,
    }
  },
};

export const modalFadeDown: Variants = {
  initial: (cardPosition: { x: number; y: number; }) => ({
    opacity: 0,
    scale: 0.3,
    x: cardPosition ? cardPosition.x - window.innerWidth / 2 : 0,
    y: cardPosition ? cardPosition.y - window.innerHeight / 2 : -50,
    transition: {
      duration: .25,
      ease: 'easeOut',
    }
  }),
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: .25,
      ease: 'easeOut'
    }
  },
  exit: (cardPosition: { x: number; y: number; }) => ({
    opacity: 0,
    scale: 0.1,
    x: cardPosition.x - window.innerWidth / 2,
    y: cardPosition.y - window.innerHeight / 2,
    transition: {
      duration: .25,
      ease: 'easeIn',
    }
  })
};

export const expandCollapseFade = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1, transition: { duration: .25 } },
  exit: { height: 0, opacity: 0, transition: { duration: .25 } }
};
