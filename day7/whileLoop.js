





















let x = 0;
let y = 10;
while (x < 5 && y > 0) {
    console.log(`x: ${x}, y: ${y}`);
    x++;
    y -= 2;
}


let number = 5; // You can change this number to compute a different factorial
let factorial = 1;
let current = number;

do {
    factorial *= current;
    current--;
} while (current > 0);

console.log("The factorial of " + number + " is " + factorial);



/* Objective: Generate a sequence of Fibonacci numbers up to a specified number of elements. */
let n = 10;  // Number of Fibonacci numbers to generate
let fib1 = 0;
let fib2 = 1;
let count = 0;

if (n === 1) {
    console.log(fib1);
} else {
    do {
        console.log(fib1);
        let nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
        count++;
    } while (count < n);
}



let a = 36;  // Change these numbers to test with different values
let b = 60;

do {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
} while (a !== b);

console.log("The GCD is: " + a);

