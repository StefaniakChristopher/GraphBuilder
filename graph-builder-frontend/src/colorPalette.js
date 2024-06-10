// to style the graph, it has to be a variable

export const bgColorSecondary = getComputedStyle(document.documentElement)
  .getPropertyValue("--bg-secondary")
  .trim();
