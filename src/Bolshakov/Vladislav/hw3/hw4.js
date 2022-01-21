
   let f = function(day) {

   if (day === 1) {
      return 'Воскресенье';
   } else if (day === 2) {
       return 'Понедельник';
   } else if (day === 3) {
       return 'Вторник';
   } else if (day === 4) {
       return 'Среда';
   } else if (day === 5) {
       return 'Четверг';
   } else if (day === 6) {
       return 'Пятница';
   } else if (day === 7) {
       return 'Суббота';
     }  else if  (day === 8) {
             return 'Error: parameter should be in the range of 1 to 7';
   } else {
      throw  new Error(' Error: parameter type is not a Number');
      }
      };
   console.log(f(1));
    console.log(f(2));
     console.log(f(8));
      console.log(f('1'));