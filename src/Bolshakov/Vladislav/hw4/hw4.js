


const arr = [1,2,3];

const result = arr.some(function(item, i, arr) {
 return i > 0;

});
console.log(result);