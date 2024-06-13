/* Given an alphanumeric string s, return the second largest numerical digit that appears 
in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.
Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit.  */

var secondHighest = function (s) {
  let str = s.split("");
  let letters = [];
  let numbers = [];
  let indexLetters = 0;
  let indexNumbers = 0;

  // Separate letters and numbers
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      letters[indexLetters] = str[i];
      indexLetters++;
    } else {
      numbers[indexNumbers] = str[i]; // Convert character to digit
      indexNumbers++;
    }
  }

  // Sort the numbers array in descending order
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  // Find the second largest unique digit
  let firstLargest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== firstLargest) {
      return numbers[i];
    }
  }
  

  // If no second largest digit found, return -1
  return -1;
};

// Test cases
console.log(secondHighest("dfa12321333666afd")); // Output: 2
console.log(secondHighest("abc1111")); // Output: -1
