/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 */
var singleNumber = function(nums) {
    
    let count = 0
    for(let x of nums){
        for(let z of nums){
            if(x==z){
              count++
            }
        }
        if(count==1){
         return x
        }
        
    }
    
    
    
};
const rez = singleNumber([4,1,2,1,2])
console.log(rez)