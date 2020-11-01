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
function tryto(){
function tryToWin() {
    
    
start();
function two(number) {
    if (number > randomNum) {
        alert ('Загаданное число меньше');
    } else if (number < randomNum) {
        alert ('Загаданное число больше');
    } else {
        alert ('Поздравляю, Вы угадали!!!');
        return 0;
    }
        return randomNum, number;
    }

    console.dir(two);
    console.log(number);
    return two (number);
    
}
tryToWin();
return tryto();
} tryto();
} one();