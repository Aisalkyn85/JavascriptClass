/* You are given two strings word1 and word2. Merge the strings by adding letters in 
alternating order, starting with word1. If a string is longer than the other, append 
the additional letters onto the end of the merged string.


Return the merged string. */

var mergeAlternately = function (word1, word2) {
  let str = "";
 console.log(word1[2])
  let index = 0;
  while (word2.length > index || word1.length > index) {
    if(word1[index] != undefined){
        str+=word1[index]

    }
    if(word2[index] != undefined){
        str+=word2[index]
    }
    index++
    
  }
  return str;
};
let result = mergeAlternately(word1 = "ab", word2 = "pqrs");
console.log(result);
