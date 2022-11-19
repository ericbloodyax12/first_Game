import newStartGame from "./modules/startGame.js";


let buttonElement = window.document.getElementById("startGame");



function getRandomData(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Personages(name = '', strength = undefined, health = undefined) {
    //this = {};
    this.name = name;
    this.strength = strength;
    this.health = health;
    //return this
}


function getData() { // то что мы вводим это min , a max пока пусть будет 40
    let isCorrectValue  = false;
    while(!isCorrectValue) {
        let data = +prompt("Add Strenght (from 0 to 20) ");
        if (data > 0 && data <= 20 && !isNaN(data)) {
            let randomData = getRandomData(data, 40);
            isCorrectValue = true;
            return randomData;
        }
        else {
            alert('add right data pls');
        }
    }
}


function setDataToObjectAndReturnIt(name, health) {
    let localStrenght = getData();
    let newPerson = new Personages(name, localStrenght, health);
    return newPerson;
}

async function startGame() {
    await buttonElement.remove();
    let addheroName = prompt("What`s your name?", "erik");
    let ork = setDataToObjectAndReturnIt('ork', 50);//сообщение для кого выводится promt
    let erik = setDataToObjectAndReturnIt(addheroName, 50);
    newStartGame(getRandomData,erik,ork)
};

buttonElement.addEventListener("click", startGame);



// creat function при нажатии кнопки героя  отнимае у здоровья героя силу противника до тех пока не умрет (game over через) и это через функцию while
// сделать так чтобы происходил start new game
