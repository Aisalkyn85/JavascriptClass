









let arr=[5,6,7,5]
let dupl = 0;

for(let i=0;i<arr.length;i++){
    let count = 0;
    for(let j=0;j<arr.length;j++){
        if(i != j && arr[i]==arr[j]){
            count++;
            dupl+=count;
            console.log(arr[i])
        }
        
    }
}
console.log(dupl)