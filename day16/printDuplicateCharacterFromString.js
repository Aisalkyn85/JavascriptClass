






















let str="applicationprogramminginterfacerespfulapiislightweightprotocol"

for(let i=0;i<str.length;i++){
    let count=0;
    for(let j=0;j<str.length;j++){
        if(i != j && str[i]==str[j]){
            count++
            console.log(str[i]+" "+count)
        }
    }
}