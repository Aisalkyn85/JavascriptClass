/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 */





var checkIfPangram = function (sentence) {
  let ch = 'a';
  console.log(ch.charCodeAt())
  //ch=String.fromCharCode(ch.charCodeAt()+1)
  console.log(String.fromCharCode(97))
  for (let i = 0; i < 26; i++) {
    if(sentence.includes(ch)){

    }else{
        return false
    }
    ch=String.fromCharCode(ch.charCodeAt()+1)
  }
  return true
};
let result = checkIfPangram("leetcode");
console.log(result);
