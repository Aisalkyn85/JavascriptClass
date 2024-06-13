





















let set1 = new Set()
let set2 = new Set([1,2,3,4])
let set3 = new Set([11,22,3,44,5])
let set4 = new Set([99,77,66,55])
let setOfSet = new Set()
set1.add(set2)
setOfSet.add(set1)
console.log(setOfSet)

for(let x of setOfSet){
    for(let i of x){
        for(let z of i){
            console.log(z)
        }
    }
}
