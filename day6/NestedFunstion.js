








let arr = [41, 63, 754, 843];
//reverse
function show() {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let x = reverse(num);
    console.log(x);
  }
}
show();

function reverse(num) {
  let rem = 0;
  let rev = 0;
  while (num > 0) {
    rem = Math.floor(num % 10);
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
