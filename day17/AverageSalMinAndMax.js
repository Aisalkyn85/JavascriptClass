/* You are given an array of unique integers salary 
where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum 
and maximum salary. Answers within 10-5 of the 
actual answer will be accepted. */

var average = function (salary) {
  for (let i = 0; i < salary.length; i++) {
    for (let j = 0; j < salary.length; j++) {
      if (salary[i] < salary[j]) {
        let temp = salary[i];
        salary[i] = salary[j];
        salary[j] = temp;
      }
    }
  }
  console.log(salary);
  let sum = 0;
  let count = 0
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    count++
  }
  console.log(count)
  return sum/count
};

let result = average([1000,2000,3000]);
console.log(result);
