




let arr = [4, 9, 6, 7, 1, 2];
let num = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      num = arr[i];
      arr[i] = arr[j];
      arr[j] = num;
    }
  }
}
console.log(arr);
