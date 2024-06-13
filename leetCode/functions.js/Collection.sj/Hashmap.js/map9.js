let arr = [14,5,16,7]
let arr1 = [141,52,61,75]
let arr2 = [411,1522,62,72]
let map = new Map()
map.set(1,arr)
map.set(2,arr1)
map.set(3,arr2)

console.log(map)

map.forEach((value, key)=>{
    
    for(let i=0;i<=value.length;i++){
        for(let z=0;z<value.length;z++){
            if(value[i]<value[z]){
                let temp = value[i]
                value[i]=value[z]
                value[z]=temp

            }
        }
    }

    
})
console.log(map)