function f() {
  let sum = 0;
  for (argument of arguments) {
    if (typeof argument == 'number') {
      sum += argument;
    }else{
     throw  new Error( 'all parameters type should be a number');
  }
  }
  console.log(sum);
  }


f(1, 2, 3,);
f(1, 1, 1, 1, 1, 1, 1, 1);
f(1, 2, 's', 4)

