
 function isEven(num) {
 let result;
     if (typeof  num === 'number'){
      return num % 2 == 0;
 }else {
  throw  new Error( 'all parameters type should be a number');
  }
 return result;
 }
 console.log(isEven(3));
  console.log(isEven(4));
   console.log(isEven('Content'));