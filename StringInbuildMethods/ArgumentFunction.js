









a = 0;
function num() {
  arr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arguments[i] < arguments[j]) {
        a = arguments[i];
        arguments[i] = arguments[j];
        arguments[j] = a;
      }
    }
  }
  for (let g = 0; g < arguments.length; g++) {
    arr[g] = arguments[g];
  }
  console.log(arr);
}
num(5, 6, 7, 83, 3);
