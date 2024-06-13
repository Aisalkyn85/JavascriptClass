//factorial 5: 1*2*3*4*5
let arr = [3,6,7,8]
let val = []
function show(){
for(let i=0;i<arr.length;i++){
   let x=  display(arr[i])
   val[i]=x
}
console.log(val)

}
show()
function display(num){
    let fact = 1;
    for(let i=1;i<=num;i++){
    fact = fact*i
    
    }
    return fact
}

