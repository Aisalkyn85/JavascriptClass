/* 1. Question
what is function declaration

*/

function name(num){
    return num*num
}

/* Q2.What is function expression
a function expression is a way to define a function within an expression,
rather than in a standalone statement. This allows the function to be assigned
 to variables, passed as arguments, or returned from other functions. Here's a 
 basic example of a function expression 
 
 when you store function inside of a variable, it is function expression*/

 const cube = function(param){ // this part called anonymous function, and this anonymous function 
    return param*param // can be assinged to a variable or passed as a call back
 }
 console.log(cube(3))

 /* Q3 - what is first class function 
 language where a function can be

function can be treated like a variable, their functions are called first class functions. In these cases,
functions can be passed into another functions can be used manipulated and returned from those
functions. And basically, everything that a variable can do a function can also do. So this is why
we call functions as first class function in JavaScript. So let me show you an example. 
 */

  function round(num){
    return num/num
}

    function displayRound(rd){
        console.log("show function ",rd(2))
    }

    displayRound(round) 

   