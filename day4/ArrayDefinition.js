


let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[0]);  // 10

// access third element
console.log(numbers[2]);  // 40





let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);

// Output: [ 'eat', 'sleep', 'exercise' ]







let dailyActivities1 = ["eat", "sleep"];

// add an element at the beginning
dailyActivities.unshift("work"); 

console.log(dailyActivities);

// Output: [ 'work', 'eat', 'sleep' ]


let dailyActivities2 = [ "eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

console.log(dailyActivities);

// Output: [ 'eat', 'exercise', 'sleep' ]


let numbers1 = [1, 2, 3, 4, 5];

// remove one element
// starting from index 2
numbers.splice(2, 1);

console.log(numbers);

// Output: [ 1, 2, 4, 5 ]





const dailyActivities = [ "eat", "sleep"];

// return the length of array
console.log(dailyActivities.length);

// Output: 2


let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();

console.log(dailyActivities);

// Output: [ 'work', 'eat', 'sleep' ]


const array2 = new Array("eat", "sleep");

console.log(array2);

// Output: [ 'eat', 'sleep' ]