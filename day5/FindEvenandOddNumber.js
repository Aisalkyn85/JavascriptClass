







let arr = [5, 6, 7, 81, 2, 39, 76];
let even = [];
let odd = [];
let indexEven = 0;
let indexOdd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even[indexEven] = arr[i];
    indexEven++;
  } else {
    odd[indexOdd] = arr[i];
    indexOdd++;
  }
}

console.log(even);
console.log(odd);
