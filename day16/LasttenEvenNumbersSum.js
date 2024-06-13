


















let count = 0
let add = 0
for(let i=100;i>=0;i--){
if(i%2===0){
count++
add+=i
if(count==10){
    break
}
}
}
console.log(add)