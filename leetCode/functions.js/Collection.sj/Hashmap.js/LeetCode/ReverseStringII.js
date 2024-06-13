/* Given a string s and an integer k, reverse the first k characters 
for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, then reverse 
the first k characters and leave the other as original. */

var reverseStr = function(s, k) {
    /* abcdef
    k=3
    cbadef */
    let str = ""
    for(let i=k-1;i>=0;i--){
       str+=s[i]
    }
    let str1 = ""
    for(let i=k;i<s.length;i++){
        str1 += s[i]
    }
    return str+str1
    
};
let rev = reverseStr("abcdef",k=3)
console.log(rev)