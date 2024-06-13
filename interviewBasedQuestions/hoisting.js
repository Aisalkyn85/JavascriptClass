/* Hoisting - Interview Question
JavaScript hoisting is a mechanism where variable and function declarations are
 moved to the top of their containing scope during the compilation phase
 Always remember that in the background the Javascript is first declaring the variable and then 
 initializing them. It is also good to know that variable declarations are processed before any code is executed. 
 */

 /* for var 
 In this example, the declaration var hoistedVar is hoisted to the top, but 
 the initialization hoistedVar = "I am hoisted!" remains in place. So, when
  console.log(hoistedVar) is called the first time, it prints undefined. */

 console.log(hoistedVar); // Output: undefined
 var hoistedVar = "I am hoisted!";
 console.log(hoistedVar); // Output: "I am hoisted!"

 /* var Hoisting
Variables declared with var are hoisted to the top of their function or global scope.
 However, they are initialized to undefined, not their actual value, until the code execution phase 
 reaches their declaration. */


 console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

/* In this example:

The declaration var x is hoisted to the top, but the assignment x = 5 remains in place.
During the creation phase, x is initialized to undefined.
The first console.log(x) outputs undefined because the assignment hasn't been reached yet. */

/* let and const Hoisting
Variables declared with let and const are also hoisted, but they are not initialized. Instead,
 they remain in a "temporal dead zone" (TDZ) from the start of the block until the declaration 
 is encountered. Accessing them before their declaration results in a ReferenceError.

let Hoisting */

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10

/* In this example:

The declaration let y is hoisted to the top of its block scope.
y is not initialized and remains in the TDZ(temporary dead zone) until the declaration is encountered.
Accessing y before its declaration results in a ReferenceError. */



/* const hoisting */

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
console.log(z); // Output: 15

/* In this example:

The declaration const z is hoisted to the top of its block scope.
z is not initialized and remains in the TDZ until the declaration is encountered.
Accessing z before its declaration results in a ReferenceError.
 */

/* Key Differences
Initialization:
var: Initialized to undefined.
let and const: Not initialized (TDZ).

Scope:
var: Function scope (or global scope if declared outside a function).
let and const: Block scope.

Re-declaration:
var: Can be re-declared within the same scope.
let and const: Cannot be re-declared within the same scope.

Summary
var: Hoisted and initialized to undefined. Accessible before declaration but with a value of undefined.
let: Hoisted but not initialized. In the TDZ until the declaration is encountered. Accessing before declaration causes ReferenceError.
const: Hoisted but not initialized. In the TDZ until the declaration is encountered. Must be initialized at the 
time of declaration. Accessing before declaration causes ReferenceError.
 */

/* The "temporal dead zone" (TDZ) is a behavior in JavaScript that occurs with variables declared using
 let and const. It refers to the time period between entering a block and the point where the variable 
 is declared and initialized. During this period, the variable cannot be accessed, and any attempt to do 
 so results in a ReferenceError.








 
Temporal Dead Zone (TDZ) Explained
When the JavaScript engine encounters a block of code, it hoists the declarations of variables to
 the top of their scope but does not initialize them. This means that the variables are in a "dead zone" 
 from the start of the block until the actual declaration is encountered during the execution phase. 
 */

 {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // Output: 10
  }
  
  /* In this example:

When the block is entered, the declaration let a is hoisted to the top of the block.
However, a is not initialized and is in the TDZ.
The first console.log(a) tries to access a before it is initialized, resulting in a ReferenceError.
After the declaration, a is initialized with the value 10, and the second console.log(a) outputs 10. */


{
    console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 20;
    console.log(b); // Output: 20
  }
/* When the block is entered, the declaration const b is hoisted to the top of the block.
However, b is not initialized and is in the TDZ.
The first console.log(b) tries to access b before it is initialized, resulting in a ReferenceError.
After the declaration, b is initialized with the value 20, and the second console.log(b) outputs 20. */  


/* Key Points about TDZ
Duration: The TDZ starts at the beginning of the block and ends when the variable is declared.
ReferenceError: Any attempt to access a variable in the TDZ results in a ReferenceError.

Scope: The TDZ applies to variables declared with let and const, which are block-scoped.

Initialization: Variables in the TDZ are uninitialized and cannot be accessed until their declaration is encountered.
Why TDZ Exists
The TDZ ensures that variables are not used before they are declared, helping to prevent errors and improve 
code reliability. It enforces the principle that variables declared with let and const must be explicitly initialized before use.

 */


 /* Function Hoisting
For function declarations, both the declaration and the definition are hoisted to the top of the containing scope. */



hoistedFunction(); // Output: "I am hoisted!"

function hoistedFunction() {
    console.log("I am hoisted!");
}






/* Q10
Params vs arguments
confuses a lot of people, which of these is called params and which of these is called the argument.
So when we have a function like this declared over here, and when we call the function, the values 
that we pass inside of here are called arguments. So these are arguments.
And when we receive those values inside of our function, this is called params,
or parameters. So these are called params, and this is called the argument. Pretty simple, isn't it?

*/

function square(num){ // param
  //console.log(num*num)
}
square(5)// argument



/* Spread operator */

function multiply (num1, num2){
  console.log(num1*num2)
}
var arr = [5,6]

multiply(...arr) // spread operator




function multiply1 (...nums){
  console.log(nums)
}
var arr = [5,6]

multiply1(...arr) // rest operator







