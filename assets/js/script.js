
class Case {
    constructor(isBomb) {
        this.setIsBomb(isBomb);
    }


    number;
    isBomb;

    setNumber(value) {
        this.number = value;
    }
    setIsBomb(value) {
        this.isBomb = value;
    }

    getNumber() {
        return this.number;
    }
    getIsBomb(){
        return this.isBomb;
    }
}


const cases = document.querySelectorAll(".case");
const tab = [];

function setUpTable() {
    let length = cases.length;
    while (length--) {
        const i = length;
        cases[i].addEventListener("click", () => {
            console.log(i);
            cases[i].classList.toggle("backGreen");
        });
        tab[length] = false;
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
            tab[index] = true
        }
        else {
            i--;
        }
    }
}

function checkIfBomb(index) {
    return (0 <= index && index < cases.length) ? tab[index] : false;
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
    for (let i = 0; i < cases.length; i++) {
        if (checkIfBomb(i) == false) {
            const bombNumber = getBombNumberNear(i);
            cases[i].classList.add(`nb${bombNumber}`);
            if (bombNumber != 0)
            {
                cases[i].innerText = bombNumber;
            }
        }
    }
}



let exemple = new Case(false);
exemple.setNumber(5);
console.log(exemple.number);

setUpTable();
putRandomBombs();
fillNumber();
