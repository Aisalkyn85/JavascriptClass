/* Write a function that reverses a string. The input string is given 
as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */
var reverseString = function(s) {
    let arr = []
    let index = 0
    for(let i=s.length-1;i>=0;i--){
        arr[index]=s[i]
        index++
    }
    
    
    return arr
};
let rev = reverseString(["h","e","l","l","o"])
console.log(rev)