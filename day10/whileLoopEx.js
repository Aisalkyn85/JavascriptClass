// Function to print the multiplication table of a number up to 10

function multiplication(N) {
  let count = 1; // Initialize the counter

  // Start the while loop
  while (count <= 10) {
    // Calculate the product
    let num = N * count;

    // Print the result in the format: N x counter = product
    console.log("result " + num + " * " + count);

    // Increment the counter
    count++;
  }
}

// Example usage: print the multiplication table for 7
multiplication(2);


function countVowels(str) {
    let count = 0;  // Counter for vowels
    let index = 0;  // Current position in the string

    // Define vowels in a simple array
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // While loop to iterate through the string
    while (index < str.length) {
        // Check each character if it is a vowel
        if (vowels.indexOf(str.charAt(index)) !== -1) {
            count++;  // Increment the count if a vowel is found
        }
        index++;  // Move to the next character
    }

    return count;  // Return the total count of vowels
}

// Example usage:
const exampleString = "Hello World";
const numberOfVowels = countVowels(exampleString);
console.log(`The number of vowels in '${exampleString}' is: ${numberOfVowels}`);

