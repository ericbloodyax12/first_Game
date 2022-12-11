import {setDataToLocalStorage} from "../helpers/localStorageHelper.js";

export function setHeroName() {
   let heroName = prompt("add hero name","er");
   if (heroName) {
      setDataToLocalStorage(heroName)
   }
   else {
      throw new Error('sample')
   }
}
export function getHeroName () {
   return localStorage.getItem("name")
}