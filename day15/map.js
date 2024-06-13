
















/* Map in JavaScript
Map is a collection of key-value pairs where the key can be of any type. 
Map remembers the original order in which the elements were added to it,
 which means data can be retrieved in the same order it was inserted in.
In other words, Map has characteristics of both Object and Array:
Like an object, it supports the key-value pair structure.
Like an array, it remembers the insertion order.

How to Create and Initialize a Map in JavaScript
A new Map can be created like this:
*/

const map = new Map();

/* Another way of creating a Map is with initial values. 
Here's how to create a Map with three key-value pairs: */

const jumptotech = new Map([
    ['name', 'jumptotech'],
    ['type', 'blog'],
    ['writer', 'qa engineer'],
]);

// To access and print individual values
 console.log(jumptotech.get('name'));    // Output: freeCodeCamp
console.log(jumptotech.get('type'));    // Output: blog
console.log(jumptotech.get('writer'));  // Output: Tapas Adhikary 

// To print the entire Map
const jumptotech1 = new Map([
    ['name', 'jumptotech'],
    ['type', 'blog'],
    ['writer', 'qa engineer'],
]);

// Iterating over the Map and printing each key-value pair
for (let [key, value] of jumptotech1) {
    console.log(key, value);
}

/* How to Add values to a Map in JavaScript
To add value to a Map, use the set(key, value) method.

The set(key, value) method takes two parameters, key and value,
 where the key and value can be of any type, a primitive (boolean, 
    string, number, etc.) or an object: */

    // create a map
const map1 = new Map();

// Add values to the map
map1.set('veggie', 'apple');
map1.set('friut', 'cherry');
map1.set('berry', 'blueberry');


/* To print the entire Map in JavaScript, you can use various methods 
depending on how you want to display it. 
Using for...of loop: */



for (let [key, value] of map1) {
    console.log(key, value);
} 



