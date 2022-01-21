function getDivisors(num) {
	var result = [];

	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
	result.push(i);
		}else if (typeof  num === 'number'){
		  }else {
     throw  new Error( 'parameter type is not a Number');
                   }

	}return result;

}
     console.log(getDivisors(12));
     console.log(getDivisors('Content'));
     console.log(getDivisors(0));

function getDivisors(num) {
	var result = [];

	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
        result.push(i);
		}else if (typeof  num === 'number'){

		  }else {
     throw  new Error( 'parameter type is not a Number');
                   }

	}return result;

}
     console.log(getDivisors(12));
     console.log(getDivisors('Content'));
     console.log(getDivisors(0));