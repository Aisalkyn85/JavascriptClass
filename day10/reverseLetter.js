//reverseString

let str = "Cucumber";
let word = "u";
let abc = 0;
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i])
  if (str[i] === word) {
    abc++;
  }
}
console.log(abc);
