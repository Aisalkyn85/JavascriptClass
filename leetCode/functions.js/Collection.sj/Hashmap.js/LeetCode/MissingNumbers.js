/* Given an array nums containing n distinct numbers in the 
range [0, n], return the only number in the range that is missing from the array. */

var missingNumber = function(nums) {
    let index = 0
    
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]<nums[j] && i != j){
                let temp = nums[i]
                nums[i]=nums[j]
                nums[j]=temp
            }
        }
        
    }
    
    for(let z = 0;z<nums.length;z++){
        
        if(nums[z] != z){
          return z
        }
    }
    
};
let num = missingNumber([3,0,1])
console.log(num)

