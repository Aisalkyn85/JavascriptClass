/* You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words. */

var countCharacters = function(words, chars) {
    let arr = []
    let wordNew = ""
    let index = 0
    for(let x of words){
        let bool = true
        for(let j=0;j<x.length;j++){
            
            if(!chars.includes(x[j])){
                bool = false
                
            }
        }
        if(bool==true){
            arr[index]=x
            index++
        }
    }
    return arr
};
let result = countCharacters(["hello","world","leetcode"], chars = "welldonehoneyr")
console.log(result)