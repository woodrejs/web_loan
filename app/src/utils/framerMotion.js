export const variantsGoUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hidden: { opacity: 0, y: 50 },
};
export const variantsOpacity = {
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
  hidden: { opacity: 0 },
};
export const variantsBtns = {
  hover: {
    y: 2,
    x: 1,
    transition: { duration: 0.2 },
    boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.55)",
  },
};
export const variantsItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export const variantsContainer = {
  hidden: { opacity: 0 },
  visible: (custom = 0.2) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom,
    },
  }),
};
