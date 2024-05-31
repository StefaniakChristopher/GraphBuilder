export const magnitudeChecker = (xAxisValues) => {
  let digitCounter = 0;
  console.log(digitCounter);
  for (let i = 0; i < xAxisValues.length; i++) {
    if (typeof xAxisValues[i] === "string") {
      digitCounter += 1;
    }
    if (xAxisValues[i] === ",") {
      digitCounter = 0;
    }

    if (digitCounter > 5) {
      return 0;
    }
    console.log(digitCounter);
    console.log(typeof xAxisValues[i]);
  }

  return 1;
};

export const categoryChecker = (categories) => {
  let charCounter = 0;
  console.log(charCounter);
  for (let i = 0; i < categories.length; i++) {
    if (typeof categories[i] === "string") {
      charCounter += 1;
    }
    if (categories[i] === ",") {
      charCounter = 0;
    }

    if (charCounter > 40) {
      return 0;
    }
    console.log(charCounter);
    console.log(typeof categories[i]);
  }

  return 1;
};
