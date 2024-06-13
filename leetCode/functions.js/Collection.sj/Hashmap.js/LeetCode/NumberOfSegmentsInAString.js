/* Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters. */

var countSegments = function(s) {
    let count = 0

    let arr = []
    arr = s.split(" ")
   let sum =  arr.length
   return sum
};
let ret = countSegments("Hello, my name is John")
console.log(ret)