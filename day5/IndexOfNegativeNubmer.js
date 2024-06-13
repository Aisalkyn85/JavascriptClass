









let arr =[2,4,-5,6]

var negativeNumber = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            return arr[i]
        }
    }
}
console.log(negativeNumber([2,4,-5,6]))