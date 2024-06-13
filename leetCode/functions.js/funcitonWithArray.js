arr = [4,5,6,7,8]
function show(){
for(let i=0;i<arguments.length;i++){
   console.log(arguments[i]) 
}
}
show(arr)

function display(){
for(let i=0;i<arguments.length;i++){
    console.log(arguments[i])
}
}
display("Cucumber","Apple")

function display(...arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
    }
    display("Cucumber","Apple")
    
    