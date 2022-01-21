
function f(x) {
let result;
    if (typeof  x === 'number'){
result = x*x*x;
}else {
 throw  new Error( 'parameter type is not a Number');
 }
 return result;
}
var result = f(2);
console.log(result);

var result = f('Content');
console.log(result);