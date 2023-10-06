import { Case } from "./case.js";


const cases = document.querySelectorAll(".case");
const tab = [];

function setUpTable() {
    let length = cases.length;
    while (length--) {
        const i = length;
        tab[length] = new Case;
        tab[length].caseIndex = length;
    }
}

function putRandomBombs() {
    const bombNumber = cases.length / 5;
    for (let i = 0; i < bombNumber; i++) {
        const randomNumberRow = Math.round(Math.random() * 9);
        const randomNumberColumn = Math.round(Math.random() * 9);
        const index = randomNumberColumn * 10 + randomNumberRow;

        if (checkIfBomb(index) == false) {
            cases[index].classList.toggle("bombCase");
            tab[index].isBomb = true;
        }
        else {
            i--;
        }
    }
}

function checkIfBomb(index) {
    return (0 <= index && index < tab.length) ? tab[index].isBomb : false;
}

function getBombNumberNear(index) {
    let number = 0;

    for (let i = -1; i <= 1; i++) {

        //Check if we do not collide on borders
        if (Math.floor((index + i) / 10) == Math.floor(index / 10)) {
            //Check Top line
            number += checkIfBomb(index + i - 10) ? 1 : 0;
            //Check Mid line
            number += checkIfBomb(index + i) ? 1 : 0;
            //Check Mid line
            number += checkIfBomb(index + i + 10) ? 1 : 0;
        }
    }
    return number;
}



function fillNumber() {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].isBomb == false) {
            tab[i].number = getBombNumberNear(i);
            cases[tab[i].caseIndex].classList.add(`nb${tab[i].number}`);
            if (tab[i].number != 0)
            {
                cases[i].innerText = tab[i].number;
            }
        }
    }
}

export{cases,tab,setUpTable,putRandomBombs,checkIfBomb,fillNumber}