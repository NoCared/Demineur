import { tab,cases } from "./setupGrid.js";

function hideAll(){
    for (let i = 0; i < tab.length; i++) {
        cases[i].classList.add("hidden");
        cases[i].isDisplayed = false;
    }
};
function showAll(){
    for (let i = 0; i < tab.length; i++) {
        cases[i].classList.remove("hidden");
        cases[i].isDisplayed = true;
    }
};


export{hideAll,showAll};