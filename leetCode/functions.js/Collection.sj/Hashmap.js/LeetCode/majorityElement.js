/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
 */
var majorityElement = function(nums) {
    let arr = []
    let index = 0
    for(let x of nums){
     let count = 0
     for(let z of nums){
        if(x==z){
            count++
        }
     }
     arr[index] = count
     index++
    }
    console.log(arr)
    let max = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    let num = arr.indexOf(max)
    return nums[num]
};
let element = majorityElement([3,2,3])
console.log(element)