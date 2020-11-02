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
    while (!isNumber(number));
};


function one() {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    console.log(randomNum);


    function two() {
        start();
            
        if (number > randomNum) {
            alert ('Загаданное число меньше');
            return two();
        } else if (number < randomNum) {
            alert ('Загаданное число больше');
            return two();
        } else {
        return alert ('Поздравляю, Вы угадали!!!');
        }
       
    }
    console.dir(two);
    return two(number);
} 
one();
