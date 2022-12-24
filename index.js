import newStartGame from "./modules/startGame.js";
import getEquipmentArr from "./modules/equipments/equipment.js";
import {setHeroName,getHeroName} from "./utils/getHeroName.js";

function initialize() {
    let heroName = getHeroName();
    if (heroName) {
        removeStartGamesElements();
    }
}
initialize();
export function  removeStartGamesElements() {
        const removingElements = document.getElementsByClassName("remove-element")
       const h1element = document.getElementById('startGameTitle');
        const heroName = getHeroName();
        h1element.innerHTML = `Привет, &nbsp;${heroName}`;
        Array.from(removingElements).forEach((item, index, array)=>{
            item.remove();
        })
};

//region getElements
let buttonsInfo = [
    {buttonName:"startButton",id:"startGame", listener:setHeroName},
    {buttonName:" equipmentButton",id:"equipment", listener:ask},
    {buttonName:"askButton",id:"ask", listener:getEquipmentArr}
];
function getElementsAndAddListeners(buttons) {
    let elements = [];
    for (let i = 0; i<buttons.length; i++){
      let currentElement = window.document.getElementById(buttons[i].id);
      if(currentElement) {
          currentElement.addEventListener("click",buttons[i].listener);
          elements.push(currentElement);
      }
    }
    return elements;
}
let [startButton, equipmentButton, askButton ] = getElementsAndAddListeners(buttonsInfo);
//endregion


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
    await startButton.remove();


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


//todo 1 сделать кнопку удаления значений(данных) из localStorage
//todo 2 добавить(вернуть видимость) скрытых кнопок