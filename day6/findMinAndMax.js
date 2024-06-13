





let arr = [5, 6, 7, 8, 9];

function show(isMax) {
  let min = 90;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  if (isMax == true) {
    console.log(max);
  } else {
    console.log(min);
  }
}
show(true);
