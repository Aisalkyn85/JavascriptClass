












let num = 12
let reverse=0;
let reminder=0;
while(num>0){
reminder=Math.floor(num%10)
reverse=(reverse*10)+reminder
num=Math.floor(num/10)
}
console.log(reverse)