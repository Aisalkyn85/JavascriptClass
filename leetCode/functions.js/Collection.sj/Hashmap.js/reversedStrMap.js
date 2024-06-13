let map = new Map([
    [1,new Set(["Apple","Banana","Berry"])],
    [2,new Set(["Cucumber","tomato"])],
    [3,new Set(["Strawberry","Cran"])]
])
let rev = new Map()

map.forEach((value, key)=>{
    let set = new Set()
    for(let x of value){
        let str = ""
        for(let i=x.length-1;i>=0;i--){
            str = str+x[i]
        }
        set.add(str)
    }
    
    rev.set(key, set)
})
console.log(rev)