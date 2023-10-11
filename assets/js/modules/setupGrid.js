import { Case } from "./case.js";
import { setupInput } from "./inputs.js";
import { randomStart } from "./gameplay.js";

let sizeRow = 24;
let sizeColumn = 24;
const tab = [];

function setUpTable() {

    const gridDiv = document.getElementById("grid");
    gridDiv.style.gridTemplateColumns = 'repeat(' + sizeColumn + ', 1fr)';
    gridDiv.style.gridTemplateRows = 'repeat(' + sizeRow + ', 1fr)';

    for (let i = 0; i < sizeRow * sizeColumn; i++) {
        let createDiv = document.createElement("div");
        gridDiv.append(createDiv);
        createDiv.classList.add("case", "hidden");
        tab[i] = new Case;
        tab[i].index = i;
        tab[i].refHtmlElement = createDiv;
    }
}

function putRandomBombs() {
    const bombNumber = Math.floor(tab.length / 5);
    for (let i = 0; i < bombNumber; i++) {
        const randomNumberRow = Math.round(Math.random() * (sizeRow - 1));
        const randomNumberColumn = Math.round(Math.random() * (sizeColumn - 1));
        const index = randomNumberColumn * sizeRow + randomNumberRow;

        if (checkIfBomb(index) == false) {
            tab[index].isBomb = true;
        }
        else {
            i--;
        }
    }
    document.querySelector("#bombNumberDisplay span").textContent = bombNumber;
}

function checkIfBomb(index) {
    return (0 <= index && index < tab.length) ? tab[index].isBomb : false;
}

function getBombNumberNear(index) {
    let number = 0;

    for (let i = -1; i <= 1; i++) {

        //Check if we do not collide on borders
        if (Math.floor((index + i) / sizeRow) == Math.floor(index / sizeRow)) {
            //Check Top line
            number += checkIfBomb(index + i - sizeRow) ? 1 : 0;
            //Check Mid line
            number += checkIfBomb(index + i) ? 1 : 0;
            //Check Mid line
            number += checkIfBomb(index + i + sizeRow) ? 1 : 0;
        }
    }
    return number;
}



function fillNumber() {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].isBomb == false) {
            tab[i].number = getBombNumberNear(i);
        }
    }
}

function init(fromScratch = true) {
    setUpTable();
    putRandomBombs();
    fillNumber();
    setupInput();
    randomStart();
}

function restart() {
    tab.splice(0,tab.length);
    const gridDiv = document.getElementById("grid");
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.lastChild);
    }
    init();

}

function redimension(modifier)
{
    if (sizeColumn + modifier >= 5)
    {
        sizeColumn += modifier;
        sizeRow += modifier;
        document.querySelector("#rowLenght").textContent = sizeRow;
        document.querySelector("#columnLenght").textContent = sizeColumn;

        restart();
    }
}

export { tab, init, restart, redimension, checkIfBomb, sizeRow, sizeColumn }