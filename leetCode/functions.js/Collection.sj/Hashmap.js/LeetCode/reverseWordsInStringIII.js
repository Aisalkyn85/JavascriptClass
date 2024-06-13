/* Given a string s, reverse the order of characters in 
each word within a sentence while still preserving whitespace and initial word order.

 */
var reverseWords = function(s) {
    let arr = []
    arr = s.split(" ")
    let reverse = ""
    for(let x of arr){
        for(i=x.length-1;i>=0;i--){
           reverse+=x[i]
        }
        reverse+=" "
    }

    return reverse
};
let rev = reverseWords("Let's take LeetCode contest")
console.log(rev)