var arr = [1,2,3];

var result = arr.reduce(function(acc, item, i, arr) {
 return item  + acc;

}, 0);
console.log(result);