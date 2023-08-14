export const getRandomIndex = () => {
  return +Math.random().toFixed(1) * 10;
};

export const checkUnique = (number) => {
  let arr = `${number}`.split("");
  let uniqueSet = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueSet.includes(arr[i])) {
      return false;
    }
    uniqueSet.push(arr[i]);
  }
  return true;
};