











var a = "pop";
let reversed = "";
let origin = a;

for (let i = a.length - 1; i >= 0; i--) {
  console.log(a[i]);
  reversed += a[i];
}
if (reversed == origin) {
  console.log("this is palindrom " + reversed);
} else {
  console.log("this is not palindrom " + reversed);
}
