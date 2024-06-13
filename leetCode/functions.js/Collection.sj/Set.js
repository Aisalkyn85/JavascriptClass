let set = new Set ([3,4,5,6])

set.forEach(element => {
    console.log(element)
});

for(let x of set){
    console.log(x)
}

set.add(9)
set.forEach(element => {
    console.log(element)
});
set.delete(9)
set.forEach(element => {
    console.log(element)
});

let r = set.has(7)

console.log(r)
let set1 =  new Set([54,56,78])
set.add(set1)
console.log(set)