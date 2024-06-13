/*Given an integer array nums, return the third distinct maximum 
number in this array. If the third maximum does not exist, return the maximum number.

*/
var thirdMax = function(nums) {
    let EmptyArr = []
    let index = 0
    for(let q=0;q<nums.length;q++){
        let bool = true
        for(let h=0;h<EmptyArr.length;h++){
            if(nums[q]==EmptyArr[h] && q != h){
                bool = false
            }

        }
        if(bool==true){
            EmptyArr[index]=nums[q]
            index++
        }
    }
    console.log(EmptyArr)
    if(EmptyArr.length==1){
        return EmptyArr[0]
    }
    
    for(let i=0;i<EmptyArr.length;i++){
        for(let j=0;j<EmptyArr.length;j++){
            if(EmptyArr[i]>EmptyArr[j] && j != i){
                let temp = EmptyArr[i]
                EmptyArr[i]=EmptyArr[j]
                EmptyArr[j]=temp
            }
        }
    }
    if(EmptyArr.length==2){
        return EmptyArr[0]
    }
    return EmptyArr[2]
}
console.log(thirdMax([1,2]))