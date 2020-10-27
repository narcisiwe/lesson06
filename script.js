'use strict';

const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);


  
    function tryToWin() {
        let number; 

        function checkNumber() {
            number = prompt('Угадай число от 1 до 100'); 
            if (number === ' ' || number === null || isNaN(number)) {
                alert ('Это не число!!!');
                console.log(number);
            } else {
                return 0;
            }
            return checkNumber();
         }
         checkNumber();


        if (number > randomNum) {
            alert ('Загаданное число меньше');
        } else if (number < randomNum) {
            alert ('Загаданное число больше');
        } else {
            alert ('Поздравляю, Вы угадали!!!');
            return 0;
        }
        return tryToWin();
     }
     tryToWin();
