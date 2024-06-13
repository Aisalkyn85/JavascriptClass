/* You are given two strings s1 and s2 of equal length.
 A string swap is an operation where you choose two indices in a 
 string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing 
at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank". */

var areAlmostEqual = function (s1, s2) {
  if (s1 == s2) {
    return true;
  } else {
    let arr = [];
    for (let i = 0; i < s1.length; i++) {
      arr[i] = s1[i];
    }
    console.log(arr);
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    let merge = "";

    for (let i = 0; i < arr.length; i++) {
      merge += arr[i];
    }
    console.log(merge);

    if (merge == s2) {
      return true;
    }
  }
  return false;
};
let result = areAlmostEqual((s1 = "attack"), (s2 = "defend"));
console.log(result);
