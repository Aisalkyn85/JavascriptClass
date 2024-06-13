



















let arr = ["Cucumber", "Apple", "family", "Wife"];
let reversedArray = []
for (let j = 0; j < arr.length; j++) {
  let word = arr[j];
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  reversedArray.push(reversedWord);
}

console.log(reversedArray);




let arr1 = ["Cucumber", "Apple", "family", "Wife"];
let reversedArray1 = [];  // Initialize an empty array to store reversed words
let index = 0

// Loop through the original array from the end to the beginning
for (let i = arr1.length - 1; i >= 0; i--) {
    reversedArray1[index]=arr1[i];  // Add each word to the new array
    index++
}

console.log(reversedArray1);  // Print the array of reversed words

