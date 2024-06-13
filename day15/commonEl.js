let set1 = new Set([3,4,5,6,7])
let set2 = new Set([3,4,51,2])
//for(let x of set1){
 //   if(set2.has(x)){
 //       set1.delete(x)
 //   }
//}
console.log(set1)
for(let z of set2){
    if(set1.has(z)){
        set2.delete(z)
    }
}
console.log(set2)
