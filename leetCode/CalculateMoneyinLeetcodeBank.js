/* Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from 
Tuesday to Sunday, he will put in $1 more than the day before. On every 
subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank 
at the end of the nth day. */

var totalMoney = function(n) {
    balance=0;
    let amount=1
    let addamount=1
    for(let i=1;i<=n;i++){
        balance+=addamount
        if(i%7==0){
          amount++
          addamount=amount;
        }else{
            addamount++
        }
        console.log(addamount) 
    }
    return balance
};
let ans=totalMoney(20)  
console.log(ans)