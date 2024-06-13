/* Given an alphanumeric string s, return the second largest numerical 
digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

 

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2. */

var secondHighest = function(s) {
    let max = 0
    for(let i=0;i<s.length;i++){
        if(s[i]>max){
            max = s[i]
        }
    }
    return max
};
let result  = secondHighest("dfa12321afd")
console.log(result)