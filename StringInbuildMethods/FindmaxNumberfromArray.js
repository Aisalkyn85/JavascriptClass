let arr = [5, 6, 7, 8, 93, 4];
let max = 0;
let min = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      max = arr[i];
    }
    if (arr[i] < arr[j]) {
      min = arr[i];
    }
  }
}
console.log(max);
console.log(min);
