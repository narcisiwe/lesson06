'use strict';

let number;
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const start = function() {
    do 
    {
        number = prompt('Угадай число от 1 до 100');
    }
    while (!isNumber(number) || number>100);
};


function mainFunc() {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    console.log(randomNum);


    function checkPrompt() {
        start();
            
        if (number > randomNum) {
            alert ('Загаданное число меньше');
            return checkPrompt();
        } else if (number < randomNum) {
            alert ('Загаданное число больше');
            return checkPrompt();
        } else {
        return alert ('Поздравляю, Вы угадали!!!');
        }
       
    }
    console.dir(checkPrompt);
    return checkPrompt(number);
} 
mainFunc();
