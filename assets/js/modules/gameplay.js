import { tab, cases } from "./setupGrid.js";

function lookAt(index)
{
    return (0 <= index && index < tab.length) ? tab[index].number : -1;
}

function lookAround(index) {
    let number = lookAt(index-10)
}



function discover(caseIndex) {
    if (tab[caseIndex].isDisplayed === false) {
        cases[caseIndex].classList.remove("hidden");

        if (tab[caseIndex].isBomb) {
            console.log("LOSE");
        }
        else {
            lookAround(caseIndex);
        }
    }
}


export { discover };