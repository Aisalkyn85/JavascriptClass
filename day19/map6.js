let map = new Map([
    [1, new Set([42,533,633])],
    [2, new Set([642,8533,9633])],
    [3, new Set([423,5334,1633])],
])
let rev = new Map()
map.forEach((value, key)=>{
    let set = new Set()
    for(let x of value){
        let reverse = 0
        let divide = 0
        while(x>0){
        divide = Math.floor(x%10)
        reverse = reverse*10+divide
        x = Math.floor(x/10)
    }
    set.add(reverse)
   
}
     rev.set(key, set)
})
console.log(rev)