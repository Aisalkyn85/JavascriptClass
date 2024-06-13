/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */
let arr = []
let sum = 0
var runningSum = function(nums) {

    for(let i=0;i<nums.length;i++){
        sum = sum+nums[i]
        arr[i]=sum

    }
};
runningSum([1,2,3,4])
console.log(arr)