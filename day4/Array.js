//duplicate number count
let arr = [3,3,4,4,5,6,7,8,7]
var num = 0;

for(let i=0;i<arr.length;i++){
    var count = 0;
    for(let j=0;j<arr.length;j++){
if(i != j && arr[i]==arr[j]){
count++;
}
    }
   num+=count 
}

console.log(num)