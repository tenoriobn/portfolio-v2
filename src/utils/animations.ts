export const scaleFade = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration:  .075},
};

export const slideFadeDown = {
  initial: {opacity: 0, y: -12 },
  animate: {opacity: 1, y: 0 },
  exit: {opacity: 0, y: -12 },
  transition: { duration:  .075},
};