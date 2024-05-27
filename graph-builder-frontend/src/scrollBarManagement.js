export const hideScrollbar = () => {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
};

export const compensateForScrollbar = (scrollbarWidth) => {
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

export const showScrollbar = () => {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.body.style.paddingRight = "";
};
