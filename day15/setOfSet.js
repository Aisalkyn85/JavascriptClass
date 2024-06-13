

















let set1 = new Set([9,7,6,5])
let set2 = new Set([1,2,3,4])
let set3 = new Set([11,22,3,44,5])
let set4 = new Set([99,77,66,55])
let setOfSet = new Set()
setOfSet.add(set1)
setOfSet.add(set2)
setOfSet.add(set3)
setOfSet.add(set4)
console.log(setOfSet)
let count = 0
for(let x of setOfSet){
    if(x.has(3)){
        count++
    }
    for(let i of x){
        console.log(i)
    }
}
console.log(count)