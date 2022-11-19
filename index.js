import {lenguagiesObject} from "./consts.js";
import newStartGame from "./modules/startGame.js";
import cutStringAndGetNumber from "./helpers/getNumberFromString.js";

let buttonElement = document.getElementById("startGame")



function getRandomData(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createObject(name = '', strength = undefined, health = undefined) {
    return {
        name: name,
        strength: strength,
        health: health
    }
} //фунцкия создает объект с тремя ключами: имя,сила, здоровье и с соответственными значениями


function getData() { // то что мы вводим это min , a max пока пусть будет 40
    let data = +prompt("Add Strenght (from 0 to 20) ")
    if (data > 0 && data <= 20 && !isNaN(data)) {
        let randomData = getRandomData(data, 40)
        return randomData
    } else {
        alert('add right data pls')
        getData();
    }
}


function setDataToObjectAndReturnIt(name, health) {
    let localStrenght = getData();
    return createObject(name, localStrenght, health)
}



function startGame() {

    let addheroName = prompt("What`s your name?", "erik")
    let ork = setDataToObjectAndReturnIt('ork', 50) //сообщение для кого выводится promt
    let erik = Object.assign({}, ork, {name: addheroName}, {strength: (ork.strength + 1)});
    newStartGame(getRandomData,erik,ork)

};

buttonElement.addEventListener("click", startGame);


// creat function при нажатии кнопки героя  отнимае у здоровья героя силу противника до тех пока не умрет (game over через) и это через функцию while
// сделать так чтобы происходил start new game
