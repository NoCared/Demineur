import { tab, cases } from "./setupGrid.js";

function verify(index) {
    return (0 <= index && index < tab.length) ? tab[index].number : -1;
}

function lookAt(previousIndex, index) {
    if (verify(index) != -1 && tab[index].isDisplayed === false) {
        if (tab[previousIndex].number === 0 && verify(index) > 0) {
            openCase(index);
        }
        else if (verify(index) === 0) {
            openCase(index);
            lookAround(index);
        }
    }
}

function lookAround(index) {
    for (let i = -1; i <= 1; i++) {

        const eulerCurrent = Math.floor(index / 10);
        const eulerNext = Math.floor((index + i) / 10);
        if (eulerCurrent === eulerNext) {
            lookAt(index, index - 10 + i);
            lookAt(index, index + i);
            lookAt(index, index + 10 + i);
        }
    }
}

function openCase(index) {
    cases[index].classList.remove("hidden");
    tab[index].isDisplayed = true;
}


function discover(caseIndex) {
    if (tab[caseIndex].isDisplayed === false) {
        openCase(caseIndex);
        if (tab[caseIndex].isBomb) {
            console.log("LOSE");
        }
        else {
            lookAround(caseIndex);
        }
    }
}


export { discover };