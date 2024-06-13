/* You are given a large integer represented as an integer array digits,
 where each digits[i] is the ith digit of the integer. The digits are 
 ordered from most significant to least significant in left-to-right order. The 
 large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */

var plusOne = function(digits) {
    let str = ""
    for(let x of digits){
         str += x
    }
    let num = Number(str)
    num+=1
    
    let arr = []
    let str1 = String(num)
    for(let i=0;i<str1.length;i++){
        let number1 = Number(str1[i])
        arr[i]=number1

    }
    
return arr
    
};
let ret = plusOne([4,3,2,1])
console.log(ret)