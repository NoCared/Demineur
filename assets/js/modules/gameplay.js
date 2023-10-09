import { tab } from "./setupGrid.js";

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

    let eulerCurrent = Math.floor(index / 10);
    let eulerPrevious = Math.floor((index - 1) / 10);
    let eulerNext = Math.floor((index + 1) / 10);
    lookAt(index, index - 10);
    if (eulerCurrent === eulerPrevious) {
        lookAt(index, index - 1);
    }
    if (eulerCurrent === eulerNext) {
        lookAt(index, index + 1);
    }
    lookAt(index, index + 10);
}

function openCase(index) {
    tab[index].refHtmlElement.classList.remove("hidden");
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