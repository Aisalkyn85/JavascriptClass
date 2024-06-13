











var nextGreatestLetter = function () {
  let letterArr = ["a", "b", "c"];
  let target = "c";
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] == target) {
      if (i == letterArr.length - 1) {
        return letterArr[letterArr.length - 1];
      }
      return letterArr - (1)[i];
    }
  }
  return letterArr[letterArr.length - 1];
};
console.log(nextGreatestLetter());
