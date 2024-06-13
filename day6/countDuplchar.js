let charact = "Appli";

for (let i = 0; i < charact.length; i++) {
  let count = 1;
  let charactOfWord = charact.charAt(i);
  for (let j = 0; j < charact.length; j++) {
    if (charact[j] === charactOfWord && i != j) {
      count++;
    }
  }
  console.log(count + " " + charactOfWord);
}
