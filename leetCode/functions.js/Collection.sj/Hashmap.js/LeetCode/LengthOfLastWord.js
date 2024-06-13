/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only. */
let arr = []
 var lengthOfLastWord = function(s) {
   arr =  s.split(" ")
   return arr[arr.length-1].length

 };
 
 console.log(lengthOfLastWord("Hello World"))