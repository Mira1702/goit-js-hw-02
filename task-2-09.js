function isLoginValid (login, min = 4, max = 16) {
    // Write code under this line    
    if (login.length < 4 || login.length > 16) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }
    return true;
    
}
  
function isLoginUnique  (allLogins, login) {
    'use strict';
    // Write code under this line
    if (allLogins.includes(login)) {    
        alert('Такой логин уже используется!');
        return false;        
    }
return true;
        
}
  
function addLogin (allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    // Write code under this line    
    if (isLoginValid(login) && isLoginUnique(login, logins)) {
        alert('Логин успешно добавлен!');
        logins.push(login)    
    }       
        
}
  
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'
  
console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'
  
console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
  
console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 