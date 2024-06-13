






















let set1 = new Set([4,5,6,7,8])
let set2 = new Set([5,6,7,8,9])
let  common = new Set()
//4,5
for(let x of set1){
    if(set2.has(x)){
        common.add(x)
    }
}
console.log(common)

