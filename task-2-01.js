/* const getItemsString = function (array) {
  'use strict';
  let result;
  let arrayElement = ('Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong');
  const newLocal = array.length;
  for (let i = 0; i < newLocal; i += 1) {
    result = `${i} - ${arrayElement}`;
    continue;
  }
  return (result);
  
};
console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
 */

/* newFunction();
function newFunction() {
    const getItemsString = function (array) {
        'use strict';
        let result;
        let arrayElement = ('Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong');

        for (let i = 0; i < array.length; i += 1) {
            result = `${i} - ${arrayElement}`;
            continue;
        }
        return (result);
    };
    console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
} */

const getItemsString = function(array) {
  'use strict';
  let result = '';
  for (let i = 0; i < array.length; i += 1) {    
    result += `${i+1} - ${array[i]}\n`;
    console.log(result)
  }
  return result;
}  

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(getItemsString([5, 10, 15]));


