/* Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
  */
var areOccurrencesEqual = function(s) {
    let spl = s.split("")
    let bool = true
    let empty = 0
    for(let i=0;i<spl.length;i++){
        let count=0
        for(let j=0;j<spl.length;j++){
            if(spl[i]==spl[j]){
                count++
            }

        }
        console.log(i)
        if(i==0){
            empty=count
        }
        
        if(count != empty){
            bool = false
        }
        
    }
    return bool
};
let result = areOccurrencesEqual("abacbc")
console.log(result)