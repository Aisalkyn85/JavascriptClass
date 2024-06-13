


















let set1 = new Set([4,5,6,78])
let set2 = new Set([1,4,5,6,7])
let common = new Set()
for(let x of set1){
    if(set2.has(x)){
        common.add(x)
    }
    }
   

console.log(common)