import {lenguagiesObject} from "./consts.js";
console.log("lenguagiesObject",lenguagiesObject)
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

let addheroName = prompt("What`s your name?", "erik")
let ork = setDataToObjectAndReturnIt('ork', 50) //сообщение для кого выводится promt
let erik = Object.assign({}, ork, {name: addheroName}, {strength: (ork.strength + 1)});

function startGame() {
    let isInit = true;
    let whoFirst = getRandomData(0, 1);
    if(erik.health < 0 || ork.health < 0) return;
    alert("Все нормально,все хорошо- сейчас будем драться");
    while (erik.health > 0 && ork.health > 0) {

        let addStrengthProbability = getRandomData(50, 100) / 100
        if (whoFirst == true) {
            isInit ? alert("its your lucky day today u`r first") : void (0)

            ork.health -= erik.strength
            if (ork.health < 0) break;
            erik.health -= ork.strength

        } else {
            isInit ? alert("sorry,its not your day today- ork is first") : void (0)
            erik.health -= ork.strength
            if (erik.health < 0) break;
            ork.health -= erik.strength
        }
        console.log(erik.health, ork.health)
        isInit = false
    }
    if (erik.health < 0) {
        console.log(erik.health, "insideWhile, ork is winer")
    } else {
        console.log(ork.health, `insideWhile, ${erik.name} is winer`)

    }
}


// creat function при нажатии кнопки героя  отнимае у здоровья героя силу противника до тех пока не умрет (game over через) и это через функцию while
// сделать так чтобы происходил start new game