let map = new Map([
    [1,"Apple"],
    [2,"Cucumber"],
    [3,"Strawberry"]
])
let map1 = new Map()

map.forEach((value, key)=>{
    let str = ""
    for(i=value.length-1;i>=0;i--){
        str = str+value[i]
    }
    map1.set(key, str)
})
console.log(map1)