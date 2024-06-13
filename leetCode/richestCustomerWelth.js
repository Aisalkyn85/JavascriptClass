/* You are given an m x n integer grid accounts where 
accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in 
the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in 
all their bank accounts. The richest customer is the customer 
that has the maximum wealth. */


var maximumWealth = function(accounts) {
    let arr = []
    
    for(let i=0;i<accounts.length;i++){
        let sum = 0
        for(let j=0;j<accounts[i].length;j++){
            sum += accounts[i][j]

        }
        arr[i]=sum
    }
    let max = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
};
let result = maximumWealth([[1,2,3],[3,2,1]])
console.log(result)
/* 
1 5 = 6
7 3 = 10
3 5 = 8
*/
