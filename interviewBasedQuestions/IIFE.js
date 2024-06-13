/* Q4 what is IIFE - immediatelly invocked funciton expressio





Closures
what closure is  the ability of a function to access variables and
functions that are lexically out of its scope are called closures. So closures are created
whenever a new function is created, because that function has the reference to its outer scope.
Okay, so let's try and understand more about function scopes. 
So I've opened the official MDN docs for function scope in JavaScript. And we can use their example to understand how

    */

(function data(nums) {
 // console.log(nums * nums); // Logs 25 to the console
})(5);

(function (x) {
  return (function (y) {
   // console.log(x);
  })(1);
})(2);



/*Q7.Now let's discuss an output 
based question on function scope. So we have this for loop over here. Inside of this, we have
 this set timeout, which console logs one.
Function Scope - Interview Question
And it has a delay of I into 1000 milliseconds. What do you think the output is going to be?
The interviewer can ask what the output for this code is going to be. So now, since we have 
this let I over here. So every time this for loop runs, it creates another block scope for this 
function.So the first time it's going to be zero, then one, then two, then three, then four, 
then five. But if it was where over here, then where doesn't have a block scope, then where 
would have printed five, five, five, five, five, five. So let me show you. In this case, 
we get five, five, five, five, five, because we have where over here. But if we change this to let, 
since let has the block scope, it's going to print one zero, one, two, three, four. Now again, 
to understand this question properly, you need to understand how let where and const works,
 which I have explained in my another video, which you can go and watch by clicking the link 
 in the description. So let's move on

 */

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "JumpToTech";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

//console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

//console.log(getScore()); // "Jum to tech 5"

/* Q7 function scope - output based questons
  
  */

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    //  console.log(i)
  }, i * 1000);
}

for (var i = 0; i < 5; i++) {
  // var do not have a block scope
  setTimeout(function () {
    // console.log(i)
  }, i * 1000);
}

/* Q8 hoisting function
 */

functionName();

function functionName() {
 // console.log(x);
  var x = 5;
  //console.log("Jump to Tech");
}



