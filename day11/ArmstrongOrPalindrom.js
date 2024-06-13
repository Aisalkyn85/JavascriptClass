function show(num, isArmstrong) {
  let original = num;
  let rev = 0;
  while (num > 0) {
    let rem = Math.floor(num % 10);
    num = Math.floor(num / 10);

    if (isArmstrong == true) {
      rev += rem * rem * rem;
    } else {
      rev = rev * 10 + rem;
    }
  }

  if (isArmstrong == true) {
    if (rev == original) {
      console.log("This is the armstrong number");
    } else {
      console.log("This is not the armstrong number");
    }
  } else {
    if (rev == original) {
      console.log("This is palindrom number");
    } else {
      console.log("This is not palindrom number");
    }
  }
}
show(133, true); // armstrong   //1*1*1 + 5*5*5 +3*3*3
show(121, false); //palindrom   121  =121
