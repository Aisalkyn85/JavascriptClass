/* Given a m x n matrix grid which is sorted in non-increasing order 
both row-wise and column-wise, return the number of negative numbers in grid.

 */
var countNegatives = function(grid) {
     let count = 0
    for(let i=0;i<grid.length;i++){
       let arr1 = grid[i]
        for(let j=0;j<arr1.length;j++){
            if(arr1[j]<0){
                count++
            }
        }
        
    }
    return count
};
let result = countNegatives([[3,2],[1,0]])
console.log(result)