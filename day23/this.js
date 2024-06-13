// const user = {
//     firstname: "Patrick",
//     lastname: "Scott",
//     fullname:()=>{
//         console.log(this)
//         console.log(this.firstname+" "+this.lastname)
//     }
// }
// user.fullname

/* In JavaScript, the this keyword is a special identifier that refers to the context in which 
a function is called. The value of this depends on how the function is called, and it can vary 
in different situations. Here are some common scenarios where this is used: */

/* Method Context:

When a function is called as a method of an object, this refers to the object the method is called on. */
const myObject = {
    name: 'Alice',
    greet: function() {
      console.log(this.name);
    }
  };
  myObject.greet(); // Logs 'Alice'
  
  /* Constructor Context:

When a function is used as a constructor (called with the new keyword), this refers to the newly created instance. */

function Person(name) {
    this.name = name;
  }
  const person = new Person('Bob');
  console.log(person.name); // Logs 'Bob'
  

  /* Arrow Functions:

Arrow functions do not have their own this context. Instead, this is lexically
 inherited from the outer function where the arrow function is defined. */
 const myObject1 = {
    name: 'Charlie',
    greet: function() {
      const innerFunction = () => {
        console.log(this.name);
      };
      innerFunction();
    }
  };
  myObject1.greet(); // Logs 'Charlie'

  /* this in Nested Objects
In nested objects, this refers to the nearest enclosing object. */

const car = {
    brand: 'Toyota',
    details: {
      year: 2020,
      getBrand: function() {
        console.log(this.brand); // `this` refers to the details object, not the car object
      }
    }
  };
  
  car.details.getBrand(); // Logs undefined

  /* To access the brand property from the outer object, you can use a workaround. */
  const car1 = {
    brand: 'Toyota',
    details: {
      year: 2020,
      getBrand: function() {
        console.log(car1.brand); // Accessing the outer object's property directly
      }
    }
  };
  
  car1.details.getBrand(); // Logs 'Toyota'

  const car3 = {
    brand: 'Toyota',
    getBrand: function() {
      console.log(this.brand);
    }
  };
  
  car3.getBrand(); // Logs 'Toyota'
  
  

  
  