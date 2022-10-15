let money;
let first_Name;
let id;
let strength;

let myHealth;
let orkHealth=20;
strength=prompt('Add strength');
 function onHit() {
     orkHealth=orkHealth-strength
     if (orkHealth<=0){
         alert("Ork is dead");
        let orkHealthImageElement=document.getElementById("orkHealthImage");
        orkHealthImageElement.src='https://i.pinimg.com/originals/60/fe/73/60fe73631416af13ca6b02568e113e04.jpg'
         return}

     showHealt(orkHealth);
 }

function showHealt(orkHealth) {
    alert(`orkHealth Life is ${orkHealth}`)
}
/* свою силу вводим и имя , свою жизнь рандом от 50 до 100, своя сила <20 >0, а орку хиллку 100 а силу рандомную от 0 до 20
должна потом появиться табличка с данными, пока не умерли, должно ввыводится имя мертвеца
 */
