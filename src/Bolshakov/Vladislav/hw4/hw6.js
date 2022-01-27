
var arr = [1,2,3];

var result = arr.reduceRight(function(acc, item, i, arr) {
 return acc  + item;

}, 0);
console.log(result);


