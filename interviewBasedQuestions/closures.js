/* closures in js */

//global scope

function local() {
  //local scope
}

/* lexical scope in javascript means that
a variable defined outside a function can be accessible inside of another 
function defined after a variable
declaration but the opposite is not true the variable defined inside the 
function will not be accessible outside that
function */

var name = "jump to tech"; // we defined it outside of the scope, but we were able to reach it inside of scope
//global scope

function local() {
  //local scope
  console.log(name);
}
local();

/* will this still work let's see no this is going to give us the error username is not defined so we cannot
access the variables from inside of the function we can only access the variables that are outside of this local scope */


function local() {
  var username = "jump to tech";

  //local scope
}
//console.log(username);
local();



/* Closure */



function study(){
    var name = "jum to tech"
    function displayStudy(){
        alert(name)
    }
    displayStudy()
}
study()