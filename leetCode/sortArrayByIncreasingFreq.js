/* Given an array of integers nums, sort the array in increasing 
order based on the frequency of the values. If multiple values have the 
same frequency, sort them in decreasing order.

Return the sorted array. */
var frequencySort = function (nums) {
    let arr = []
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.lenght; j++) {
      if (nums[i] == nums[j] && i != j) {
        count++;
      }

      if (count>1) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
     
    }
     arr[i]=nums[i]
  }
  return arr
};
let result = frequencySort([2,3,1,3,2])
console.log(result)
