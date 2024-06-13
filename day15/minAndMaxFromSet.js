let set = new Set([5,6,7,8,9])
let min = 58
let max = 0

for(let x of set){
    if(x<min){
        min=x
    }
    if(x>max){
        max=x
    }
    
}

console.log(min)
console.log(max)