function getRandomHealht(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let myUser= {
  name: "",
  strength:undefined,
  health:undefined,
};

myUser.health= getRandomHealht(50,100);
myUser.name=prompt("Ваше имя")

function createMyStrength() {

  let localstrength=+prompt("add strength")
  if (isNaN(localstrength) || localstrength<=0 || localstrength>20){
    alert("Введите от 0 до 20")
    createMyStrength()
  }
  else {
    myUser.strength=localstrength;

  };

}

let orkUser= createObject("er",10,10)

function createObject(name,strength,health) {
  console.log(name,strength,health)
  return  {
    name: "",
    strength:undefined,
    health:undefined,
  }


}

createMyStrength();


console.log(myUser);








