/* Given a string paragraph and a string array of
 the banned words banned, return the most frequent
  word that is not banned. It is guaranteed there is at 
  least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase. */

var mostCommonWord = function(paragraph, banned) {
    
    let divide = paragraph.toLowerCase().split(" ")
    
    let arr=[]
   for(let i=0;i<divide.length;i++){
    let count = 0
    
    for(let j=0;j<divide.length;j++){
        if(divide[i]==divide[j]){
            count++
        }
    }
    
    arr[i]=count
    
   }
   
   let index = 0
   console.log(arr)
   let max = 0
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
        index = i
    }
    
   }
   let max1 = 0
   
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max1 && max1<max){
        max1=arr[i]
        index = i
    }
    
   }
console.log(max1)
console.log(arr.indexOf(max1))
   return divide[index]
   


};
let result = mostCommonWord("Bob hit a ball the hit BALL flew far after it was hit", banned = ["hit"])
console.log(result)