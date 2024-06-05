export const magnitudeChecker = (xAxisValues) => {
  for (let i = 0; i < xAxisValues.length; i++) {
    if (xAxisValues[i] > 999999) {
      return false;
    }
  }

  return true;
};

export const categoryChecker = (categories) => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].length > 40) {
      return false;
    }
  }

  return true;
};
