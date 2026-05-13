export const cardVariants = (fromLeft: boolean) => ({
  hidden: {
    opacity: 0,
    x: fromLeft ? -40 : 40,
    y: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
});
