/* Object





















In an Object, keys are strings or symbols. If you use other data types as keys,
 they will be coerced into strings. */

 let obj = {};
 obj['a'] = 1;
 obj[123] = 2;  // 123 is coerced to '123'
 obj[{key: 'value'}] = 3;  // Object is coerced to '[object Object]'
 console.log(obj);  // { '123': 2, '[object Object]': 3, a: 1 }

 
 /* Map

In a Map, keys can be of any data type, including objects, functions, and primitives. */
let map = new Map();
map.set('a', 1);
map.set(123, 2);
map.set({key: 'value'}, 3);
console.log(map);  // Map(3) { 'a' => 1, 123 => 2, { key: 'value' } => 3 }

/* Object

The order of keys in an Object is not guaranteed but is generally insertion order since ES2015. */

let obj = {};
obj['b'] = 1;
obj['a'] = 2;
console.log(Object.keys(obj));  // [ 'b', 'a' ]

/* Map

Keys in a Map are ordered by the order of insertion. */
let map1 = new Map();
map1.set('b', 1);
map1.set('a', 2);
console.log([...map1.keys()]);  // [ 'b', 'a' ]


/* Object

You need to manually calculate the number of keys. 
In JavaScript, Object does not have a built-in property to directly return the 
number of keys it contains. Therefore, to determine the number of keys in an Object, 
you need to use a method like Object.keys() to retrieve an array of the keys and then 
check its length. Here's why this is necessary and how it can be done:
Lack of Built-in Property: Unlike Map, which has a size property, Object does not 
include a built-in property to keep track of the number of keys. This design choice
 might be due to the general-purpose nature of Object and its historical use primarily 
 for storing keyed collections where direct access to the count of properties wasn't seen as essential.
 How to Calculate the Number of Keys
Using Object.keys()

The Object.keys() method returns an array of a given object's own enumerable property names, 
which you can then use to get the count of keys.
*/
let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  let keyCount = Object.keys(obj).length;
  console.log(keyCount);  // Output: 3
  
let obj = {a: 1, b: 2};
console.log(Object.keys(obj).length);  // 2


/* A Map has a size property that gives the number of key-value pairs. */
let map2 = new Map();
map2.set('a', 1);
map2.set('b', 2);
console.log(map2.size);  // 2

/* Object

Iteration over keys requires methods like for...in or Object.keys().
 To get both keys and values, you use Object.entries(). */
 let obj = {a: 1, b: 2};
for (let key in obj) {
  console.log(key, obj[key]);  // 'a' 1  'b' 2
}

Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);  // 'a' 1  'b' 2
});

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);  // 'a' 1  'b' 2
});
/* A Map provides a forEach method and supports for...of iteration directly.
 Methods like keys(), values(), and entries() are built-in. */
 let map3 = new Map();
map3.set('a', 1);
map3.set('b', 2);

map3.forEach((value, key) => {
  console.log(key, value);  // 'a' 1  'b' 2
});

for (let [key, value] of map3) {
  console.log(key, value);  // 'a' 1  'b' 2
}

for (let key of map3.keys()) {
  console.log(key);  // 'a'  'b'
}

for (let value of map3.values()) {
  console.log(value);  // 1  2
}

/* Object

Object is general-purpose and can have performance issues with frequent 
addition and deletion of keys. */

let obj = {};
obj['a'] = 1;
delete obj['a'];
obj['b'] = 2;
console.log(obj);  // { 'b': 2 }

/* Map

A Map is optimized for frequent addition, deletion, and access of key-value pairs. */
let map4 = new Map();
map4.set('a', 1);
map4.delete('a');
map4.set('b', 2);
console.log(map4);  // Map(1) { 'b' => 2 }

/* Object

Best for structured data and when using fixed keys known at design time. */
let person = {
    name: 'John',
    age: 30
  };
  console.log(person.name);  // 'John'
  console.log(person.age);  // 30

  /* Map

Best for dynamic collections of key-value pairs where keys are not predetermined,
 or when keys are not strings. */
 let contacts = new Map();
contacts.set('John', {phone: '123-4567', address: '123 Maple St'});
contacts.set('Jane', {phone: '987-6543', address: '456 Oak St'});
console.log(contacts.get('John'));  // { phone: '123-4567', address: '123 Maple St' }

