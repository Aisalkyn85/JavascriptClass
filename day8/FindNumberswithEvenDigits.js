















/*Given an array nums of integers, return how many of them contain an even number of digits.

*/


var findNumbers = function(nums) {
let count = 0
    for(let i=0;i<nums.length;i++){
        let str = String(nums[i])
        
        if(str.length%2==0){
count++

        }
    }
    return count
    
}
console.log(findNumbers([12,345,2,6,7896]))