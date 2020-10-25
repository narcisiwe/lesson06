'use strict';

const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);


// function checkNumber() {
//     let number = prompt('Угадай число от 1 до 100'); 
//     if (number === ' ' || number === null || isNaN(number)) {
//         alert ('Загаданное число меньше');
//         console.log(number);
//     } else {
//         alert ('ВатаФак');
//         console.log(number);
//         return 0;
//     }
//     return checkNumber();
//  }
//  checkNumber();


function gameStart() {
    
    function tryToWin() {
        let number = prompt('Угадай число от 1 до 100'); 
        if (number > randomNum) {
            alert ('Загаданное число меньше');
        } else if (number < randomNum) {
            alert ('Загаданное число больше');
        } else if (number === '') {
            alert ('Введите число');
        } else if (number === null) {
            alert ('Игра окончена');
        } else {
            alert ('Поздравляю, Вы угадали!!!');
            return 0;
        }
        return tryToWin();
     }
     tryToWin();
}
gameStart();
