/* Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

Example 1:

Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.
Example 2:

Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4. */
var isThree = function(n) {
    let count = 0
    let bool = true
    let arr = []
    let index = 0
    for(let i=0;i<=n;i++){
        if(i%2==0){
            arr[index]=n
        }

    }
    return arr
    
};
let result = isThree(4)
console.log(result)