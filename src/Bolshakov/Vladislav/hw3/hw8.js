function func(arr) {
    console.log(arr.shift());

    if(arr.length != 0){
        func(arr);
    }else {
      throw  new Error('parameter type should be an array');
      } return arr;
}
func([1, 2, 3]);
func(1,2,3);
func('Content');
func([]);


