/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than 
⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 */


var majorityElement = function (nums) {
  let countArr = [];

  //let count = 0
  for (let i = 0; i < nums.length; i++) {
    
   let count = 1;

    let index = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i != j) {
        count++;
      }
     
    }
    countArr[i] = count;
  }

  let max = 0;
  for (let k = 0; k < countArr.length; k++) {
    if (countArr[k] > max) {
      max = countArr[k];
    }
  }
  console.log(countArr);
  let index = countArr.indexOf(max);
  console.log(index);
  return nums[index];
};
console.log(majorityElement([2, 2, 1, 1, 1, 1]));
