    var arr = [1, 2, -4, 3, -9, -1, 7];
    var arr2 = [];
    for (i  of arr){
        if(isPositive(i) === true){
            arr2.push(i);

}
}
    function isPositive (i) {
    if (typeof i !== 'number') {
            throw new Error('parameter type is not a Number')
    }
    else if (i >0){
    return true;
    }
    else if (i <= 0){
    return false;
    }
    }
    for ( i of arr2){
    console.log(i)
}


