function checkForSpam (str) { 
    'use strict';
    // Write code under this line
    let arrStr = str.split(/\b/);
    for (let i = 0; i < arrStr.length; i++) {
      let word = arrStr[i].toLowerCase();
      if (word === 'spam' || word === 'sale' || word.includes('$')) {
        return true;
      }
    }
    return false;
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true