/* You are given an integer array nums. The unique elements of an array are the elements that 
appear exactly once in the array.

Return the sum of all the unique elements of nums.

  */









var sumOfUnique = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i != j) {
        count++;
      }
    }
    if (count == 0) {
      sum += nums[i];
    }
  }

  return sum;
};
let result = sumOfUnique([1, 2, 3, 2]);
console.log(result);
