/*You have n coins and you want to build a staircase with these coins. 
The staircase consists of k rows where the ith row has exactly i coins. 
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/
var arrangeCoins = function (n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (count == n) {
        if (i == j) {
          return i;
        } else {
          return i;
        }
      }
      count++;
    }
  }

  return count;
};
console.log(arrangeCoins(5));
