/* There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all 
distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

 

Example 1:

Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.
Example 2:

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
 */

var canBeTypedWords = function(text, brokenLetters) {
    let spl = text.split(" ")
    let count = 0
    console.log(spl)
    for(let i=0;i<spl.length;i++){
        let bool = true
        for(let j=0;j<brokenLetters.length;j++){
            if(spl[i].includes(brokenLetters[j])){
                bool = false
            }
        }
        if(bool==true){
            count++
        }
    }
    return count
    
};
let result = canBeTypedWords("leet code", brokenLetters = "lt")
console.log(result)