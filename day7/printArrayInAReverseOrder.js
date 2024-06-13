

















let arr = [56,65,43235,6755,978]
let reminder = 0

let rev  =  []
for(let i=0;i<arr.length;i++){
    let reversed = 0
    while(arr[i]>0){
  //  console.log(arr[i])
    reminder=Math.floor(arr[i]%10)
    reversed = reversed*10+reminder
    
arr[i]=Math.floor(arr[i]/10)
}
rev[i]=reversed
}
console.log(rev)