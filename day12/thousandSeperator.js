/* Given an integer n, add a dot (".") as the thousands 
separator and return it in string format.


Example 1:

Input: n = 987
Output: "987"
Example 2:

Input: n = 1234
Output: "1.234"
 */
var thousandSeparator = function(n) {
    if(n<1000){
        return n+""
    }
    let str = n+""
    let res = ""
    for(let i=0;i<str.length;i++){
        if(i==1){
            res+="."
        }
        res = res+str[i]
    }

return res
};
let result=thousandSeparator( 1234)
console.log(result)