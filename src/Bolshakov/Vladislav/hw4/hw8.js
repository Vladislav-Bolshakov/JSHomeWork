

function arrSum(arr) {
  var sum = 0;

  arr.forEach(function(i) {
    if (typeof i== 'object')
      sum += arrSum(i);
    else
      sum += i
  })

  return sum;
}

console.log(arrSum( [[[1, 2], [1, 2]], [[2, 1], [1, 2]]]));
console.log(arrSum( [[[[[1,2]]]]]));
console.log(arrSum( [[[[[1,2]]],2],1]));
console.log(arrSum( [[[[[]]]]]));
console.log(arrSum( [[[[[],3]]]]));
