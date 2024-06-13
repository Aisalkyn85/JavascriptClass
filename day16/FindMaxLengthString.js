












let str = ["Apple","Cucumber","onion","lamb"]
let max = 0
let maxStr = ""
for(let i=0;i<str.length;i++){
    if(str[i].length>max){
        max=str[i].length
        maxStr=str[i]
    }
    }


console.log(max)
console.log(maxStr)