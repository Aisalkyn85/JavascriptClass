let map = new Map([[1,3],
                   [2,4],
                   [3,6],
                   [4,8],
                   [5,1]
                ])
let max = 0
let min = 90
let maxkey = 0
let minKey = 0
map.forEach((value,key)=>{
if(value>max){
    max=value
    maxkey=key
}
if(value<min){
    min=value
    minKey = key
}

})
console.log(max,maxkey)
console.log(min,minKey)

let sum = 0
let sumValue = 0
for(let x of map(key, value)){
sum += x(value)
}
console.log(sum)

