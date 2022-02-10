const arr = [1,2,3];

const result = arr.every(function(item, i, arr) {
 return item > 0;

});
console.log(result);