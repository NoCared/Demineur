import { tab } from "./setupGrid.js";

function hideAll(){
    for (let i = 0; i < tab.length; i++) {
        tab[i].refHtmlElement.classList.add("hidden");
        tab[i].isDisplayed = false;
    }
};
function showAll(){
    for (let i = 0; i < tab.length; i++) {
        tab[i].refHtmlElement.classList.remove("hidden");
        tab[i].isDisplayed = true;
    }
};


export{hideAll,showAll};