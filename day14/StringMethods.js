
var str1 = "Jump to tech is the best place to learn"
var str2 = "Software enginger has to know javascript"

















//charAt() Returns the character at the specified position.
console.log(str1.charAt(1))

//charCodeAt() Returns the Unicode of the character at the specified position.
console.log(str1.charCodeAt(2)) // 109 (unicode for 'm')

//concat()
console.log(str1.concat(str2))//Joins two or more strings and returns a new concatenated string.

//endsWith() Checks if a string ends with the specified string/characters. Returns true or false.
console.log(str1.endsWith("learn")) //true

//includes() Checks if a string contains the specified string/characters. Returns true or false.
console.log(str1.includes("to")) //true

//indexOf() Returns the position of the first occurrence of a specified value in a string. 
//Returns -1 if the value is not found.
console.log(str1.indexOf("tech")); // 8


//lastIndexOf()Returns the position of the last occurrence of
// a specified value in a string. Returns -1 if the value is not found.
console.log(str1.lastIndexOf("learn")); // 30


//match() Searches a string for a match against a regular expression, and returns the matches.
console.log(str2.match(/script/g)); // ["script"]


//repeat() Returns a new string with a specified number of copies of an existing string.
console.log(str1.repeat(2)); // "Jump to tech is the best place to learnJump to tech is the best place to learn"


//replace()Searches a string for a specified value, or a regular expression, 
//and returns a new string where the specified values are replaced.
console.log(str2.replace("enginger", "engineer")); // "Software engineer has to know javascript"

//slice() Extracts a part of a string and returns a new string.
console.log(str1.slice(5, 15)); // "to tech is"

//split()  Splits a string into an array of substrings.
console.log(str1.split(" ")); // ["Jump", "to", "tech", "is", "the", "best", "place", "to", "learn"]


//startWith()Checks if a string starts with specified characters. Returns true or false.
console.log(str1.startsWith("Jump")); // true

//substr()Extracts a part of a string, beginning at a specified 
//position and returning a specified number of characters.
console.log(str1.substr(5, 4)); // "to t"

//trim()Removes whitespace from both ends of a string.
var str3 = "   Hello World!   ";
console.log(str3.trim()); // "Hello World!"


//toUpperCase() Converts a string to uppercase letters.
console.log(str1.toUpperCase()); // "JUMP TO TECH IS THE BEST PLACE TO LEARN"


//toLowerCase()Converts a string to lowercase letters.
console.log(str1.toLowerCase()); // "jump to tech is the best place to learn"



