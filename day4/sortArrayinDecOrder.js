









var num = [5,7,8,92,3]
var x=0
for(let i=0;i<num.length;i++){
    for(let j=0;j<num.length;j++){
        if(num[i]<num[j]){
x=num[i]
num[i]=num[j]
num[j]=x
        }}
    
}
console.log(num)