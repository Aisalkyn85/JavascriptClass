
















//121 = reversed 121
let num = 300
let origin  = num
let reminder = 0
let reversed = 0
while(num>0){
    reminder = Math.floor(num%10)
    reversed = reversed*10+reminder
    num=Math.floor(num/10)
}
if(reversed==origin){
    console.log("this is palindrom number "+reversed)
}else{
console.log("this is not palindrom number "+reversed)
}