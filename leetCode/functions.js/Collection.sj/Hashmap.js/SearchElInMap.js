let map = new Map([
    [1,new Set([4,5,6,7])],
    [2,new Set([41,2,3,4])],
    [3,new Set([42,41,67,73])],
    [4,new Set([12,25,33,41])]
    ])
    console.log(map)
    let target = 41
    let count = 0
    map.forEach((value, key)=>{
        for(let x of value){
          if(x==target){
            count++
          }
        }
    })
    console.log(count)
    let addition = new Map()
    
    map.forEach((value, key)=>{
        let sum = 0
         for(let x of value){
           sum+=x
         }
         addition.set(key,sum)
    })
console.log(addition)