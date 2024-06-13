





















let str = "Application Application Programming Interface"
let arr = str.split(" ")
console.log(arr)
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i] ==arr[j] && i != j){
            console.log(arr[i])
        }
    }
}
