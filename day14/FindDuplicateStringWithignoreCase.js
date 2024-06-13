


















let str = ["Apple","cucumber","apple","Cucumber","Potato","Meat"]
for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
        if(str[i].toLowerCase() ==str[j].toLowerCase() && i != j){
            console.log(str[i])
        }
    }
}