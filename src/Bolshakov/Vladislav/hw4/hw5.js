const  arr = [1,2,3];

const  result = arr.reduce(function(acc, item, i, arr) {
 return item  + acc;

}, 0);
console.log(result);