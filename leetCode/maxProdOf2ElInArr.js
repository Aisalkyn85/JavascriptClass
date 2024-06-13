/* Given the array of integers nums, you will choose two different indices i and j of that array. 
Return the maximum value of (nums[i]-1)*(nums[j]-1). */
var maxProduct = function (nums) {
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  let max = 0
  max = (nums[0]-1)*(nums[1]-1)
  return max
};
let result = maxProduct([3, 4, 5, 2]);
console.log(result);
