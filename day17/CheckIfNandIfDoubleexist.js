/*Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 */

var checkIfExist = function (arr) {
  let bool = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] * 2 == arr[j] && i != j) {
        bool = true;
      }
    }
  }
  return bool;
};

console.log(checkIfExist([3, 1, 7, 11]));
