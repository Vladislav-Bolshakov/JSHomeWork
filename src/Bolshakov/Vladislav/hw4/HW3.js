
var arr = [1,2,3];

var result = arr.every(function(item, i, arr) {
 return item > 0;

});
console.log(result);