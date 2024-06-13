
/* functions are one of the fundamental
building blocks of javascript a function
is a javascript procedure which is just
a set of statements that performs a task
or calculates a value to use a function
you must define it somewhere in the
scope from what you want to call it a
function definition which is also called
a declaration or function statement
consists of the function keyword */

/* function definition, declaration, statement */

function square(number){
    return number * number
}
console.log(square(8))


/* javascript scope refers
to the visibility of variables so
variables that are defined outside of a
function block have a global scope */

var letterVar = "Apple"
function myVeggie(){
    var letterVar = "Cucumber" //local var cannot access to global variable
    console.log(letterVar)
}
myVeggie()

/* nesting a function within another function
when you nest a function within
another function or when you put a
function inside a function
the nested or inner function is private
to its containing outer function */


function addSquare(a,b){
    function square(x){
        return x*x
    }
    return square(a) + square(b)
}
//square() we cannot call inner function outside
a = addSquare(2,3)
b = addSquare(2,3)
c = addSquare(2,3)
console.log(b)


