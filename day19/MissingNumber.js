/*Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

*/
var missingNumber = function(nums) {
    

    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]<nums[j]){
                let temp = nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }

    }
    for(let k=0;k<nums.length;k++){
        if(nums[k] != k){
            return k
        }
    }
    
}
console.log(missingNumber([3,0,1]))