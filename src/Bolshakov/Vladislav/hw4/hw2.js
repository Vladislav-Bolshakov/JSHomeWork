
const arr = [1,2,3];

const result = arr.filter( function(item,  i, arr) {
 return item >0;
 return i >0;
 return arr >0;

});
console.log(result);




//####Задача 2
//
//Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//
//Функция должна содержать проверки:
//
//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//
//```javascript
//const arr = [1,2,3];
//filter(arr, function(item, i, arr) {});