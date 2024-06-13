let str = ["Apple","Cucumber","onion","lamb"]
let min=90
let minStr = null
for(let i=0;i<str.length;i++){
    if(str[i].length<min){
        min=str[i].length
        minStr=str[i]
    }
}
console.log(min+" "+minStr)
