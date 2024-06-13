/* Given a string s, find the first non-repeating character in 
it and return its index. If it does not exist, return -1. */

var firstUniqChar = function(s) {
    for(let i=0;i<s.length; i++){
        let count = 0
        for(let j=0;j<s.length;j++){
            if(s[i]==s[j]){
                count++
            }
            
        }
        if(count==1){
            return i
        }

    }
    return -1

}
let repeat  = firstUniqChar("aabb")
console.log(repeat)