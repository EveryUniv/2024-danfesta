export const variants = {
  button: {
    initial: {
      scale: 1,
      filter: 'brightness(1)',
    },
    active: {
      scale: 0.99,
      filter: 'brightness(0.9)',
    },
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      duration: 0.01,
    },
  },
  input: {
    initial: {
      scale: 1,
      filter: 'brightness(1)',
    },
    active: {
      scale: 0.99,
      filter: 'brightness(0.9)',
    },
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      duration: 0.01,
    },
  },
};
