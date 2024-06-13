/* A perfect number is a positive integer that 
is equal to the sum of its positive divisors, excluding 
the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

  */
 
var checkPerfectNumber = function(num) {
    let index = 0
    let arr=[]
    for(let i=1;i<num;i++){
      if(num%i==0){
        arr[index]=i
        index++
      }
  
    }
     let nums = 0
    for(let i=0;i<arr.length;i++){
     
      nums += arr[i]
    }
    if(num==nums){
      return true
    }else{
      return false
    }
};
let div = checkPerfectNumber(7)
console.log(div)