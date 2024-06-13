















let num = 11;
let bool = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    bool = false;
  }
}
if (bool == true) {
  console.log("this is prime nubmer " + num);
} else {
  console.log("this is not a prime number +" + " " + num);
}
