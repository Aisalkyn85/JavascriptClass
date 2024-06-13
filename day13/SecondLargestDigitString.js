/* Given an alphanumeric string s, return the second largest numerical digit that appears 
in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.
Example 1:
Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:
Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit.  */

var secondHighest = function(s) {
    let str = s.split("")
    let letters = []
    let numbers = []
    let indexLetters = 0
    let indexNumbers=0
    for(let i=0;i<str.length;i++){
        if(str[i]>='a' && str[i]<='z' || str[i]>='A'&& str[i]<='Z'){
            letters[indexLetters]=str[i]
            indexLetters++
        }else{
            numbers[indexNumbers]=str[i]
            indexNumbers++
        }
    }
    
     /* [ '1', '2', '3', '2', '1' ] */
   
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
           if(numbers[i]<numbers[j]){
            let temp = numbers[i]
            numbers[i]=numbers[j]
            numbers[j]=temp
           } 
        }
        
        
    }
    
    

return numbers[numbers.length-2]
    

  
    
};

let result = secondHighest("abc1111")
console.log(result)