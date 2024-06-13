let arr = [5,6,7,89,98,65,54,33]
let even = new Set()
let odd = new Set()
for(let x of arr){
    if(x%2==0){
     even.add(x)
    }else{
        odd.add(x)
    }
}
let map = new Map()
map.set("even", even)
map.set("odd",odd)
console.log(map)