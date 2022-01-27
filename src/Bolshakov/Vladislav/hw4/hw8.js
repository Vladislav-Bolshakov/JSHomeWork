

function arrSum(arr) {
  var sum = 0;

  arr.forEach(function(v) {
    if (typeof v == 'object')
      sum += arrSum(v);
    else

      sum += v
  })

  return sum;
}
console.log(arrSum( [[[1, 2], [1, 2]], [[2, 1], [1, 2]]]));
console.log(arrSum( [[[[[1,2]]]]]));
console.log(arrSum( [[[[[1,2]]],2],1]));
console.log(arrSum( [[[[[]]]]]));
console.log(arrSum( [[[[[],3]]]]));
