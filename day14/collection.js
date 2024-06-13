





















/* Sets
Sets are collections of unique values. A value in a set can only occur once;
 it is unique in the set's collection. 
 Sets are used to store unique values.
  Values in a Set are ordered by their insertion order.*/

 let set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Output: Set { 1, 2, 3, 4 }

/* Adding Values
Use the add method to add values to a Set. */
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(3); // Duplicate values are ignored
console.log(set1); // Output: Set { 1, 2, 3 }
/* Checking for Values
Use the has method to check if a value is in the Set. */
console.log(set.has(1)); // Output: true
console.log(set.has(4)); // Output: false

/* Removing Values
Use the delete method to remove values from a Set. */
set.delete(2);
console.log(set); // Output: Set { 1, 3 }

/* Size of the Set
Use the size property to get the number of elements in a Set. */
console.log(set.size); // Output: 2




/* Maps
Maps are collections of key-value pairs where keys can be of any data type. 
Maps maintain the order of their elements. */

let map = new Map();
map.set("key1", "value1");
map.set(2, "value2");
console.log(map.get("key1")); // Output: value1
console.log(map.get(2)); // Output: value2

/* Objects
Objects are collections of key-value pairs where keys are strings 
(or symbols) and values can be any data type. 
Objects are used to store keyed collections of various data and more complex entities.*/
let obj = {
    key1: "value1",
    key2: 42,
    key3: [1, 2, 3],
    key4: { nestedKey: "nestedValue" }
  };
  console.log(obj.key1); // Output: value1
  