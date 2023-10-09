import { tab } from "./setupGrid.js";
import { sizeColumn,sizeRow } from "./setupGrid.js";

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

    let eulerCurrent = Math.floor(index / sizeRow);
    let eulerPrevious = Math.floor((index - 1) / sizeRow);
    let eulerNext = Math.floor((index + 1) / sizeRow);
    lookAt(index, index - sizeRow);
    if (eulerCurrent === eulerPrevious) {
        lookAt(index, index - 1);
    }
    if (eulerCurrent === eulerNext) {
        lookAt(index, index + 1);
    }
    lookAt(index, index + sizeRow);
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