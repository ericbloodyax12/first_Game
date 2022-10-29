function getRandomHealht(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createObject(name = '', strength = undefined, health = undefined) {
  return {
    name: name,
    strength: strength,
    health: health
  }
}


function getData() { // то что мы вводим это min , a max пока пусть будет 40
  let data = +prompt("Add Strenght (from 0 to 20) ")
  if (data > 0 && data <= 20 && !isNaN(data)) {
    let randomData= getRandomHealht(data,40)
   return randomData
  } else {
    alert('add right data pls')
   getData();
  }
}


function setDataToObjectAndReturnIt(name, health) {
  let localStrenght = getData();
  return createObject(name,localStrenght, health)
}

let ork = setDataToObjectAndReturnIt('ork', 50) //сообщение для кого выводится promt
let erik = setDataToObjectAndReturnIt('erik', 40)
console.log(ork);
console.log(erik);
// creat function при нажатии кнопки героя  отнимае у здоровья героя силу противника до тех пока не умрет (game over через) и это через функцию while