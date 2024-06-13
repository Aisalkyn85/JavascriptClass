




/* In JavaScript, an object is a fundamental data structure used to store collections
 of data and more complex entities. The purpose of objects in JavaScript is multifaceted, 
 serving as the foundation for creating, managing, and manipulating data in a structured
  and organized manner. Here are some key purposes and uses of objects in JavaScript:

1. Storing Collections of Data
Objects are used to store collections of related data using key-value pairs. 
Each key is a string (or symbol), and the value can be any data type, including 
other objects, arrays, functions, and primitive values. */

let person = {
    name: 'John',
    age: 30,
    job: 'Engineer'
  };
  console.log(person.name);  // Output: John
  console.log(person.age);   // Output: 30
  console.log(person.job);   // Output: Engineer

  /* 2. Representing Complex Data Structures
Objects are ideal for representing more complex data structures that model real-world 
entities. They can encapsulate data and provide methods to operate on that data. */
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
      console.log('The car has started.');
    }
  };
  car.start();  // Output: The car has started.

/* 3. Encapsulation and Organization
Objects help in encapsulating related properties and methods, promoting better 
organization and modularity in the code. This encapsulation makes the code easier 
to understand and maintain. */  
let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  console.log(calculator.add(5, 3));      // Output: 8
  console.log(calculator.subtract(5, 3)); // Output: 2
  
  /* Prototype-Based Inheritance
JavaScript is a prototype-based language, and objects can inherit properties and methods
 from other objects through the prototype chain. This allows for code reuse and the creation
  of complex hierarchies. */
  let animal = {
    speak: function() {
      console.log('Animal speaks');
    }
  };
  
  let dog = Object.create(animal);
  dog.bark = function() {
    console.log('Dog barks');
  };
  
  dog.speak(); // Output: Animal speaks
  dog.bark();  // Output: Dog barks

  /* Dynamic Nature
Objects in JavaScript are dynamic, meaning you can add, modify, or delete properties 
and methods at runtime. This flexibility is useful for managing data in applications
 where the structure of the data might change over time. */
 let book = {
    title: 'JavaScript Basics',
    author: 'Jane Doe'
  };
  book.year = 2021;  // Adding a new property
  console.log(book.year);  // Output: 2021
  delete book.author;  // Deleting a property
  console.log(book.author);  // Output: undefined

  /*  Interaction with APIs
Objects are commonly used to interact with APIs, whether it is to send data
 to a server or to receive and process data from a server. JSON (JavaScript 
    Object Notation) is a popular format for exchanging data between a client and a server. */
    let user = {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com'
      };
      
      let json = JSON.stringify(user);  // Converting an object to a JSON string
      console.log(json);  // Output: {"id":1,"name":"Alice","email":"alice@example.com"}
      
      let parsedUser = JSON.parse(json);  // Parsing a JSON string back to an object
      console.log(parsedUser.name);  // Output: Alice

      /* Objects in JavaScript serve as versatile data structures for:

Storing collections of data
Representing complex entities
Encapsulating data and functionality
Implementing inheritance
Providing flexibility through their dynamic nature
Facilitating interaction with APIs */
   
  