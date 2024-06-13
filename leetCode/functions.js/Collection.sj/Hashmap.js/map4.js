let map = new Map([
                   [34,34],
                   [45,45],
                   [23,23],
                   ])

let rev = new Map()
map.forEach((value, key)=>{
    let reverse = 0
let divide = 0
    while(value>0){
        divide=Math.floor(value%10)
        reverse = reverse*10+divide
         value=Math.floor(value/10)
    }
    rev.set(key,reverse)
})
console.log(rev)