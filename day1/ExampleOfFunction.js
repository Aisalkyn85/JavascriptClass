



//simple function, non-return function
function show(a, b) {
  console.log(a + b);
}
show(3, 5); // fucntion call

//return type function
function display(a, b) {
  return a + b;
}
let x = display(4, 6);
console.log(x);

//return type fucntion
let z = function (a, b) {
  return a + b;
};
console.log(z(6, 7));

//Arrow function
let num = (q, y) => q + y;
console.log(num(3, 1));

//self invoking function
//(function(){
//   console.log("Hello")
//})();
