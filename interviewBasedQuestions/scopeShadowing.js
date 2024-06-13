/* var vs let vs const














scope.
a scope is a certain
region of a program where a defined
variable exists and can be recognized
and beyond that it cannot be recognized

Global Scope: Accessible everywhere.
*/
var globalVar = "I'm global";

function globalFunction() {
  console.log(globalVar); // Can access globalVar
}

console.log(globalVar); // Can access globalVar
globalFunction(); // Can call globalFunction




/* Function Scope: Accessible only within the function. */
function localFunction() {
  var localVar = "I'm local";
  console.log(localVar); // Can access localVar
}

localFunction(); // Can call localFunction
//console.log(localVar); // Error: localVar is not defined



/* Block Scope (introduced in ES6)
Variables declared with let and const inside a block (denoted by {}) are limited to that block.
Block Scope: Accessible only within the block (let and const).
 */
if (true) {
  let blockVar = "I'm block-scoped";
  console.log(blockVar); // Can access blockVar
}

//console.log(blockVar); // Error: blockVar is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // Can access i within the loop
}

//console.log(i); // Error: i is not defined

/* Variable shadowing 
Variable shadowing in JavaScript occurs when a variable declared within a certain scope 
(e.g., a block or a function) has the same name as a variable declared in an outer scope. 
The inner variable "shadows" the outer variable, meaning the inner variable takes precedence
 within its scope, effectively hiding the outer variable. */

 let outerVar = "I'm the outer variable";

function shadowingFunction() {
  let outerVar = "I'm the inner variable";
  console.log(outerVar); // Logs: "I'm the inner variable"
}

shadowingFunction();
console.log(outerVar); // Logs: "I'm the outer variable"




/* Block Scope Shadowing with let and const 
In this example:

outerVar is declared in the global scope.
Inside the if block, another variable with the same name outerShadow is declared using let.
When outerShadow is accessed inside the block, it refers to the block-scoped variable,
 not the global one.*/

let outerShadow = "I'm the outer variable";

if (true) {
  let outerShadow = "I'm the block-scoped variable";
  console.log(outerShadow); // Logs: "I'm the block-scoped variable"
}

console.log(outerShadow); // Logs: "I'm the outer variable"

/* need to continue */

/* Function Parameters Shadowing
In this example:

The outerVar variable is declared in the global scope.
The shadowingFunction has a parameter named outerFunction.
Inside the function, outerFunction refers to the parameter, not the global variable. */
let outerFunction = "I'm the outer variable";

function shadowingFunction(outerFunction) {
  console.log(outerFunction); // Logs: the value passed to the function
}

shadowingFunction("I'm the parameter variable");
console.log(outerFunction); // Logs: "I'm the outer variable"



/* In JavaScript, var is a keyword used to declare a variable. Here are the key characteristics 
and behaviors associated with var: */
/* Declaration var, let, const */
/* re-declare var, let, const */

var b 
var b // var you can re-declare

let c 
let c // you cannot re-declare let and const

cosnt d 
const d // missing init

/* declare without init var, let, const */


var s // you can declare without init


let q // you can declate without init

const w // you cannot declare without init, we need ot give some value


/* re-init var, let, const */

var apple = 5// we can re-init, updated
    apple=4

let banana = 8
banana = 9// we can re- init, updated

const cube = 4
cube = 3// we cannot re-init


/* illegal shsdowing 
yuo can shadow var with let, but cannot let with var*/

/* let a illegal shadowing
var a */

var a // legal shadowing
let a 



