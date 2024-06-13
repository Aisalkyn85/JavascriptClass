let arr = [5, 7, 68, 3, 2];
function show(isOdd) {
  let odd = [];
  let even = [];
  let tempOdd = 0;
  let tempEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      odd[tempOdd] = arr[i];
      tempOdd++;
    } else {
      even[tempEven] = arr[i];
      tempEven++;
    }
  }

  if (isOdd == false) {
    return even;
  } else {
    return odd;
  }
}
let num = show(false);
console.log(num);
