/* set is an order list of values that
have to be unique values. set is analogous to an
array 
a set is not intended to answer the
question like can I get the second item
can I get the seventh item can I get the
item at that index that is not what a
set is about a set is only a list like
an array but you cannot access the items
at their index iteration is done via for
each or a for of both are both are
possible and the mutation or mutation
methods are add delete and clear the
second time you try to add another value
because it is a unique data structure it
will simply not execute that operation
deletion is Again by value not by key
and you can you have a method for
clearing the whole set emptying the
whole thing converting from a set yeah
very useful when you need a list of
unique elements or when you need these
kind of operations yes these functions
are also available in something like
 */

   /* ask yourself questions before chosing which type of collections you need
   
   How do I want to access the data?
   first/last?
   key/value pair?
   is the data ordered?
   do i need unique values?
   */

   const people = [
    { name: 'Alice', birthYear: 1990 },
    { name: 'Bob', birthYear: 1985 },
    { name: 'Charlie', birthYear: 2000 }
];
// Your code here

const currentYear = new Date().getFullYear();
const peopleWithAges = people.map(person => ({
    name: person.name,
    age: currentYear - person.birthYear
}));
console.log(peopleWithAges);
// [
//     { name: 'Alice', age: 34 },
//     { name: 'Bob', age: 39 },
//     { name: 'Charlie', age: 24 }
// ]

/*  Capitalize First Letter of Strings
Question: Given an array of strings, use the map method to return a new array with the first letter of each string capitalized. */

const words = ['hello', 'world', 'javascript', 'map'];
// Your code here

const capitalizedWords = [];
for (let i = 0; i < words.length; i++) {
    capitalizedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
}
console.log(capitalizedWords); // ['Hello', 'World', 'Javascript', 'Map']




/* Calculate Lengths of Strings
Question: Given an array of strings, use the map method to return a new array with the length of each string. */

const fruits = ['apple', 'banana', 'cherry', 'date'];
// Your code here
const lengths = [];
for (let i = 0; i < fruits.length; i++) {
    lengths.push(fruits[i].length);
}
console.log(lengths); // [5, 6, 6, 4]

/*  Find Common Elements
Question: Given two arrays, use a Map to find the common elements between them. */

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
// Your code here

const map = new Map();
const commonElements = [];

for (const item of array1) {
    map.set(item, true);
}

for (const item of array2) {
    if (map.has(item)) {
        commonElements.push(item);
    }
}
console.log(commonElements); // [4, 5]

/* The for...of loop in JavaScript provides a simple and clean way to iterate over iterable objects, 
such as arrays, strings, maps, sets, and other objects that implement the iterable protocol. It allows you 
to access each element directly without needing to manage the loop's counter or indices manually. */
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5

const map1 = new Map([
    ['name', 'Alice'],
    ['age', 25],
    ['city', 'Wonderland']
]);

const array = ['a', 'b', 'c'];

for (const index in array) {
    console.log(index);  // Outputs: 0, 1, 2 (indices)
}

for (const value of array) {
    console.log(value);  // Outputs: a, b, c (values)
}

