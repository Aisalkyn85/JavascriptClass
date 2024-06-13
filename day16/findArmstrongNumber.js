// 153=1*1*1;5*5*5;3*3*3=153

















let num = 153;
reminder = 0;
multi = 0;
let origin = num;
while (num > 0) {
  reminder = Math.floor(num % 10);
  multi += reminder * reminder * reminder;
  num = Math.floor(num / 10);
}
if (origin == multi) {
  console.log("this is armstrong number " + multi);
} else {
  console.log("this is not armstrong number " + multi);
}
