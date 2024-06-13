/* Given two non-negative integers, num1 and num2 represented as string, 
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library 
for handling large integers (such as BigInteger). You must also not 
convert the inputs to integers directly. */

var addStrings = function(num1, num2) {
    let num = Number(num1)
    let num0 = Number(num2)
    let add = num+num0
    let str = String(add)
    let arr =[str,add]

    return arr
    
};
let sum = addStrings(num1 = "11", num2 = "123")
console.log(sum)