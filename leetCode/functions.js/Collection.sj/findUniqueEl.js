let set1  = new Set([4,5,6,7])
let set2 = new Set([3,4,5,6])
let unique = new Set()
for(let x of set1){
    if(set2.has(x)){
     
    }else{
       unique.add(x)
    }
}
for(let z of set2){
    if(set1.has(z)){
     
    }else{
       unique.add(z)
    }
}

console.log(unique)