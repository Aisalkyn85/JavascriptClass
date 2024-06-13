
























let map = new Map()
map.set("vegetable","cucumber")
map.set("friute","apple")
map.set("green","spinach")
for(let x of map){
    console.log(map)
}
console.log(map.get("friute"))
let c = map.has("friute")
console.log(c)
map.delete("friute")
let d = map.has("friute")
console.log(d)


