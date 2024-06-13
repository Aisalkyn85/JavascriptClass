let arr1 = [4, 5, 6, 7];
let arr2 = [5, 8, 92, 1];
let arr3 = [12, 56, 78, 34];

//let mergedArray = new Array(arr1.length + arr2.length + arr3.length);
let merged = arr1.length
let mergedArray = []



for (let i = 0; i < arr1.length; i++) {
    mergedArray[i] = arr1[i];
    
}

for (let i = 0; i < arr2.length; i++) {
    mergedArray[merged] = arr2[i];
    merged++
}

for (let i = 0; i < arr3.length; i++) {
    mergedArray[merged] = arr3[i];
    merged++
}

console.log(mergedArray);

