


var arr = [1,2,3];

var result = arr.some(function(item, i, arr) {
 return i > 0;

});
console.log(result);