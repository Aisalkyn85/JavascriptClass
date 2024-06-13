














let str = ["Apple","Cucumber","Appricot","Japan"]
let num=null
for(let i=0;i<str.length;i++){
  for(let j=0;j<str.length;j++){
    if(str[i].length<str[j].length){
        num=str[i]
        str[i]=str[j]
        str[j]=num
    }
  }  
}
console.log(str)
