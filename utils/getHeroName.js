import {setDataToLocalStorage} from "../helpers/localStorageHelper.js";
import {gameInitialize} from "../index.js";

export function setHeroName() {
   let heroName = prompt("add hero name","er");
   if (heroName) {
      setDataToLocalStorage(heroName);
   }
   else {
      throw new Error('sample');
   }
   gameInitialize();
}
export function getHeroName () {
   return localStorage.getItem("name");
}