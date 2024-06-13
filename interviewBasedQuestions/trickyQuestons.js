/* Tricky questons 
The error you encountered is due to the incorrect placement of the rest parameter 
..numbers in the function signature. In JavaScript, the rest parameter must be 
the last formal parameter in a function definition.*/

const fn = (a, ...numbers, x, y ) => { not correct
    
    console.log(x,y)
    }; 
fn(5,6,6,8)

/* correct one*/
const fn = (a, x, y, ...numbers) => {
  //console.log(x, y, numbers);
};
fn( 5, 6, 7, 8, 9);

/* Q12 what is call back function

A callback function is a function passed into another function as an argument,
 which is then invoked 
inside the outer function to complete some kind of routine or action.
*/



document.addEventListener("click",function(Params){

})


/* Q13 Arrow function ES6
*/

const add = (firstname, secondName) => {
    return firstname + " " + secondName;
}

console.log(add("Dan", "Fun"));  // This will log "Dan Fun"


/* Arrow function  vs regular function */

/* 1. syntax */

function rom(num){// regular function
    return num*num
}

const cube = (num)=>{// arrow function
    return num*num
}

/* 2. Implicit "return keyword" */

const cube1 = (num)=>// arrow function
    num*num

    /* 3. arguments */

    function fn1(){
        console.log(arguments)
    }

fn1(3,4,5,6)

const fnArgum = ()=>{
    //console.log(arguments)// you cannot get argument keyword in argument function
}

fnArgum(3,4,5,6)







