let buttonElementIII = window.document.getElementById("ask");

let arr = ["blade", "clothes", "stuff"];

function getEquipmentArr(arr) {

     let orkEquipment = arr.slice();
    return orkEquipment;
}


let orkEquipment = getEquipmentArr(arr);
console.log(orkEquipment);
export default getEquipmentArr;