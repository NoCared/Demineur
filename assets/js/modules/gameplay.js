import { tab, cases } from "./setupGrid.js";

function verify(index)
{
    return (0 <= index && index < tab.length) ? tab[index].number : -1;
}

function lookAt(previousNumber, index)
{
 if (previousNumber===0 && verify(index)>0)
{
 
}
}

function lookAround(index) {
    // let number = lookAt(index-10);
    // if (index !== 0 && number === 0)
    // {
    //     discover(index-10)
    // }
}



function discover(caseIndex) {
    if (tab[caseIndex].isDisplayed === false) {
        cases[caseIndex].classList.remove("hidden");
        tab[caseIndex].isDisplayed = true;
        if (tab[caseIndex].isBomb) {
            console.log("LOSE");
        }
        else {
            lookAround(caseIndex);
        }
    }
}


export { discover };