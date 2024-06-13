















let str = ["Apple","Cucumber","Apple","Cucumber","Potato","Meat"]
for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
        if(j != i && str[i]==str[j]){
            console.log(str[i])

        }
    }
}