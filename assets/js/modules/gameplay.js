import { tab } from "./setupGrid.js";
import { sizeColumn, sizeRow, getNumberCaseToDiscover, setNumberCaseToDiscover } from "./setupGrid.js";
import { win, lose } from "./gameEnd.js";

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
        lookAt(index, index - 1 - sizeRow);
        lookAt(index, index - 1);
        lookAt(index, index - 1 + sizeRow);
    }
    if (eulerCurrent === eulerNext) {
        lookAt(index, index + 1 - sizeRow);
        lookAt(index, index + 1);
        lookAt(index, index + 1 + sizeRow);
    }
    lookAt(index, index + sizeRow);
}

function openCase(index) {
    tab[index].refHtmlElement.classList.remove("hidden");
    tab[index].isDisplayed = true;


    if (tab[index].isBomb) {
        tab[index].refHtmlElement.classList.toggle("bombCase");
    }
    else {
        tab[index].refHtmlElement.classList.add(`nb${tab[index].number}`);
        if (tab[index].number != 0) {
            tab[index].refHtmlElement.innerText = tab[index].number;
        }


        setNumberCaseToDiscover(getNumberCaseToDiscover() - 1);
        if (getNumberCaseToDiscover() <= 0) {
            return true;
        }
    }
    return false;
}


function discover(caseIndex) {
    if (tab[caseIndex].isDisplayed === false && tab[caseIndex].isFlagged === false) {

        const hasWow = openCase(caseIndex);
        if (hasWow === true) {
            win();
        }
        else if (tab[caseIndex].isBomb) {
            lose();
        }
        else {
            lookAround(caseIndex);
        }
    }
}

function putFlag(caseIndex) {
    if (tab[caseIndex].isDisplayed === false) {
        tab[caseIndex].isFlagged = !tab[caseIndex].isFlagged;
        tab[caseIndex].refHtmlElement.classList.toggle("flag");
    }
}

function randomStart() {
    let tabTemp = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].number === 0) {
            tabTemp.push(i);
        }
    }
    let randNumer = Math.floor(Math.random() * (tabTemp.length - 1));
    discover(tabTemp[randNumer]);
}

export { discover, putFlag, randomStart };