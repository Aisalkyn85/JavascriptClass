
















let num = 543;
//5*4*3
let reminder = 0
let reverse = 1
while(num>0){
    reminder = Math.floor(num%10)
    reverse = reverse*reminder
    num=Math.floor(num/10)
}
console.log(reverse)