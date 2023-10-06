import { tab, cases } from "./setupGrid.js";


function lookAround(index) {

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