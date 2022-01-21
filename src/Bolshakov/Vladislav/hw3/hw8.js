var arr = [1, 2, 3];

function func(i){
    console.log(arr[i++]);
    if(i<arr.length){
        func(i);
    }else {
      throw  new Error( 'parameter type should be an array');
      }
}
func(0);