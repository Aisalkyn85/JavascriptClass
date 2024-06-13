/* You are given a string time in the form of  hh:mm, 
where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits. */

var maximumTime = function (time) {
  let arr = time.split(":"); //"2?:?0"
  console.log(arr + " aar") //2?, ?0
  let hrs = arr[0];
  console.log("hours "+hrs)
  
  let min = arr[1];
  console.log("min "+min)
  let result = "";

  if (hrs[0] == "?") {
    if (Number(hrs[1]) >= 4) {
      result = result + "1";
    } else if (Number(hrs[1]) < 4) {
      result = result + "2";
    }
    result = hrs[1];
  }
  if (hrs[1] == "?") {
    result = hrs[0];
    if (Number(hrs[0]) == 0) {
      result = result + "9";
    } else if (Number(hrs[0]) == 1) {
      result = result + "9";
    } else if (Number(hrs[0]) == 2) {
      result = result + "3";
    }
  }
  result = result + ":";
  if (min[0] == "?") {
    result = result + "5";
    result = result + min[1];
  }
  if (min[1] == "?") {
    result = result + min[0];
    result = result + "9";
  }
  return result;
};
let time = maximumTime("0?:3?");
console.log(time);
