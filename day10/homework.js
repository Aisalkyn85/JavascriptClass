/* Write a function that takes a number and returns whether it is even or odd. */












function isEven(nums) {
    let evenNums = [];
    let oddNums = [];
    let indexOdd = 0
    let indexEven =0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenNums[indexEven]=nums[i]
            indexEven++
        } else {
            oddNums[indexOdd]=nums[i]
            indexOdd++
        }
    }

    console.log("Even Numbers: ", evenNums);
    console.log("Odd Numbers: ", oddNums);
    
    return evenNums;
}

isEven([34, 5654, 78, 23, 32, 4, 2, 1]);




 
