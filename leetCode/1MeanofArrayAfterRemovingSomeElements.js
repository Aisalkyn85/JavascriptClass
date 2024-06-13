/* Given an integer array arr, return the mean of the remaining integers 
after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted. */

var trimMean = function (arr) {
    let meanArr = []
    let index = 0
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let len = (arr.length * 5) / 100;
  let sum = 0;
  let count = 0;

  for (let i = len; i < arr.length-len; i++) {
    sum += arr[i];
    count++;
    meanArr[index]=arr[i]
    index++
  }
  console.log(len)
  console.log(arr)
  console.log(meanArr)
  let mean = sum / count;
  return mean;
};
let result = trimMean([
    6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0
]);
console.log(result);
