
 let startGame = function startGame(getRandomData,hero,villian) {
    let isInit = true;
    let whoFirst = getRandomData(0, 1);
    if(hero.health < 0 || villian.health < 0) return;
    alert("Все нормально,все хорошо- сейчас будем драться");
    while (hero.health > 0 && villian.health > 0) {

        let addStrengthProbability = getRandomData(50, 100) / 100
        if (whoFirst == true) {
            isInit ? alert("its your lucky day today u`r first") : void (0)

            villian.health -= hero.strength
            if (villian.health < 0) break;
            hero.health -= villian.strength

        } else {
            isInit ? alert("sorry,its not your day today- villain is first") : void (0)
            hero.health -= villian.strength
            if (hero.health < 0) break;
            villian.health -= hero.strength
        }
        console.log(hero.health, villian.health)
        isInit = false
    }
    if (hero.health < 0) {
        console.log(hero.health, "insideWhile, villain is winer")
    } else {
        console.log(villian.health, `insideWhile, ${hero.name} is winer`)

    }
}
 export default startGame;