














function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverseString("hello")); // Output: "olleh"

  /* Write a function that returns the length of the longest word in a given sentence.

 */

  function findLongestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    }
    return maxLength;
  }
  
  // Example usage:
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // Output: 6

  /* Write a function that capitalizes the first letter of each word in a given sentence. */
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Example usage:
  console.log(titleCase("I'm a little tea pot")); // Output: "I'm A Little Tea Pot"

  /* Write a function that returns an array containing the largest number from each sub-array. */
  function largestOfFour(arr) {
    return arr.map(subArr => Math.max(...subArr));
  }
  
  // Example usage:
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // Output: [5, 27, 39, 1001]

  /* Write a function that checks if a string (first argument) ends with the given target string (second argument). */
  function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
  }
  
  // Example usage:
  console.log(confirmEnding("Bastian", "n")); // Output: true

  /* Write a function that repeats a given string str (first argument) for num times (second argument). */
  function repeatStringNumTimes(str, num) {
    if (num <= 0) return '';
    return str.repeat(num);
  }
  
  // Example usage:
  console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"

  /* Write a function that truncates a string if it is longer than the specified number of characters. 
  Return the truncated string with a ... ending. */
  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
  }
  
  // Example usage:
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // Output: "A-tisket..."

  /* Return true if the string in the first element of the array contains all of the letters of the string 
  in the second element of the array. */

  function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) === -1) return false;
    }
    return true;
  }
  
  // Example usage:
  console.log(mutation(["hello", "hey"])); // Output: false

  /* Write a function that converts Celsius to Fahrenheit. */
  function convertToF(celsius) {
    return celsius * 9 / 5 + 32;
  }
  
  // Example usage:
  console.log(convertToF(30)); // Output: 86
  
  
  
  