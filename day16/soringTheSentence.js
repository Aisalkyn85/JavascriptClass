/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers. */

var sortSentence = function (s) {
  let wro = ""
  let spl = s.split(" ");
  //console.log(spl);
  let str = spl[0];
  /* console.log(str.charAt(str.length - 1)); //spl[spl.length-1]
  console.log(spl[spl.length - 1]);
 */
  for (let i = 0; i < spl.length; i++) {
    let str1 = spl[i]
    for (let j = 0; j < spl.length; j++) {
let str2 = spl[j]
      if (Number(str1[str1.length-1]) < Number(str2[str2.length-1])){
        let temp = spl[i];
        spl[i] = spl[j];
        spl[j] = temp;
      }
    }
     
  }
wro +=spl
  //console.log(spl);

  return wro
};
let result = sortSentence("Myself2 Me1 I4 and3");
console.log(result);
