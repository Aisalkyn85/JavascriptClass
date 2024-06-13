/* Given a sorted array of distinct integers and a target value,
 return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

  */
var searchInsert = function(nums, target) {
   let  lastEl = nums[nums.length-1]
    if(lastEl<target){
        return nums.length
    }
    for(let i=0;i<nums;i++){
        if(nums[i]==target){
            return i
        }
    }
};
const unique = searchInsert([1,3,5,6],5)
console.log(unique)