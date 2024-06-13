/* Given two string arrays word1 and word2, return true if the 
two arrays represent 
the same string, and false otherwise.

A string is represented by an array if the array elements
 concatenated in order forms the string. */

var arrayStringsAreEqual = function (word1, word2) {
  let bool = false;
  let merge1 = ""
  let merge2 = ""

  for (let i = 0; i < word1.length; i++) {
    merge1 += word1[i]
    
  }
  for(let j=0;j<word2.length;j++){
    merge2 += word2[j]
  }
  console.log(merge1)
  console.log(merge2)
  if(merge1==merge2){
    return true
  }

  return bool;
};
let result = arrayStringsAreEqual(word1 = ["a","b", "c"], word2 = ["ab", "c"]);
console.log(result);
