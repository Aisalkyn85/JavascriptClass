
















let arr = [5, 7, 2, 3, 4];
let arr1 = [6, 8, 9, 23];
let result = [];
let num = 0;
for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
num = result.length;
for (let j = 0; j < arr1.length; j++) {
  result[num] = arr1[j];
  num++;
}

console.log(result);
