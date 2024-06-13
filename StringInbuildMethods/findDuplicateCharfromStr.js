let str = "Application Programming Interface"
let charOfWord = ' '
for(let i=0;i<str.length;i++){
    charOfWord = str.charAt(i)
    for(let j=0;j<charOfWord.length;j++){
        if(str[i]==charOfWord && i !=j){
            console.log(charOfWord)
        }
    }
}