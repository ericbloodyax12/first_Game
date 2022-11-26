import newStartGame from "./modules/startGame.js";
import getEquipmentArr from "./modules/equipments/equipment.js";


let buttonElement = window.document.getElementById("startGame");
let buttonElementII = window.document.getElementById("equipment");
let buttonElementIII = window.document.getElementById("ask");


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

        let data = +prompt(`Add Strenght for (from 0 to 20) `);
        if (data > 0 && data <= 20 && !isNaN(data)) {
            let randomData = getRandomData(data, 40);
            isCorrectValue = true;
            return randomData;
        }
        else {
            alert('add right data pls');
            return (false);
        }
    }
}

function ask() {
    alert("Ork: How are u?");

}

function setDataToObjectAndReturnIt(name, health) {
    let localStrenght = getData();
    console.log("its done");
    let newPerson = new Personages(name, localStrenght, health);
    return newPerson;
}
async function startGame() {
    await buttonElement.remove();


        let addheroName = prompt("What`s your name?");
    if (!addheroName){return};
    let ork = setDataToObjectAndReturnIt('ork', 50);//сообщение для кого выводится promt
    if (!ork.strength) {
        // let elementDiv = document.getElementById("main")
        // let elem = document.createElement("button");
        // elem.classList.add("activate-button");
        // let text = document.createTextNode("Start again");
        // elem.appendChild(text);
        // elem.addEventListener("dblclick",startGame); // добавляет несколько кнопопк испрваить
        // elementDiv.append(elem);
        // console.log("elementDiv:", elementDiv, "elem:", elem) ;
        return
    };
    let erik = setDataToObjectAndReturnIt(addheroName, 50);
   if (!erik.strength) {return};

    newStartGame(getRandomData,erik,ork)


};

buttonElementIII.addEventListener("click", ask);
buttonElement.addEventListener("click", startGame);
buttonElementII.addEventListener("click", getEquipmentArr);



// todo вынести логику добавления кнопки (при отмене игры) в отдельнуюд функцию и вызывать когда надбо починить баг
// todo "сумку" доделать новую страницу


// creat function при нажатии кнопки героя  отнимае у здоровья героя силу противника до тех пока не умрет (game over через) и это через функцию while
// сделать так чтобы происходил start new game
