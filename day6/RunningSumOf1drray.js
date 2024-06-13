














/*Given an array nums. We define a running sum of an array as runningSum[i] = 
sum(nums[0]…nums[i]).*/

var runningSum = function (nums) {
  let arr = [];
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
    number = number + nums[i];
    arr[i] = number;
  }
  console.log(arr);
};
runningSum([1, 2, 3, 4]);
