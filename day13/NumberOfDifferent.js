/* You are given a string word that consists of digits and lowercase English letters.
You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will
 become " 123  34 8  34". Notice that you are left with some integers that are separated 
 by at least one space: "123", "34", "8", and "34".
Return the number of different integers after performing the replacement operations on word.
Two integers are considered different if their decimal representations without any leading
 zeros are different.
Example 1:

Input: word = "a123bc34d8ef34"
Output: 3
Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
Example 2:

Input: word = "leet1234code234"
Output: 2
Example 3:

Input: word = "a1b01c001"
Output: 1
Explanation: The three integers "1", "01", and "001" all represent the same integer because
the leading zeros are ignored when comparing their decimal values.
  */












var numDifferentIntegers = function (word) {
  let numbers = [];
  let currentNumber = "";
  let numberIndex = 0;

  // Iterate through the characters of the string
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "0" && word[i] <= "9") {
      // If the character is a digit, add it to the current number
      currentNumber += word[i];
    } else {
      // If the character is not a digit and we have a current number, add it to the list
      if (currentNumber.length > 0) {
        numbers[numberIndex++] = currentNumber;
        currentNumber = "";
      }
    }
  }

  // Add the last number if there is one
  if (currentNumber.length > 0) {
    numbers[numberIndex++] = currentNumber;
  }

  // Remove leading zeros and check for unique numbers
  let uniqueNumbers = {};
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    // Remove leading zeros
    let j = 0;
    while (j < num.length && num[j] === "0") {
      j++;
    }

    // Construct the clean number without leading zeros
    let cleanNumber = "";
    while (j < num.length) {
      cleanNumber += num[j++];
    }

    // Handle case where number is all zeros
    if (cleanNumber === "") {
      cleanNumber = "0";
    }

    // Use object to store unique numbers
    uniqueNumbers[cleanNumber] = true;
  }

  // Count unique numbers
  let uniqueCount = 0;
  for (let key in uniqueNumbers) {
    uniqueCount++;
  }

  return uniqueCount;
};

// Test cases
console.log(numDifferentIntegers("a123bc34d8ef34")); // Output: 3
console.log(numDifferentIntegers("leet1234code234")); // Output: 2
console.log(numDifferentIntegers("a1b01c001")); // Output: 1
