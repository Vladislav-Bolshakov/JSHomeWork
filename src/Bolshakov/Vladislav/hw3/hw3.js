function sum(a,b,c) {
let result;
    if (typeof  a === 'number' && typeof b ===  "number" && typeof c === 'number'){
result = (a-b)/c;
}else {
 throw  new Error( 'all parameters type should be a number');
 }
 return result;
}
var result = sum(9,3,2);
console.log(result);
var result2 = sum('s',9,3);
console.log(result);
