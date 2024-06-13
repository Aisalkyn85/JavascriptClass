/*Given a 1-indexed array of integers numbers that is already 
sorted in non-decreasing order, find two numbers such that 
they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] 
where 1 <= index1 < index2 <= numbers.length.*/

var twoSum = function(numbers, target) {
    let index = 0
let arr = []
    for(let i=0;i<numbers.length;i++){
        
        for(let j=0;j<numbers.length;j++){
            if(numbers[i]+numbers[j]==target && i != j){
                arr[index]=i
                index++
                arr[index]=j
                return arr

            }
        }
    }
    return arr
    
}
console.log(twoSum([2,3,4],6))