const getItemsString = function(array) {
    'use strict';
    let result;
    for (let i = 0; i < array.length; i += 1) {
      /* console.log(array[i]) */
      result = `${i+1} - ${array[i]}`;
      console.log(result)
    }
  }  
  
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));