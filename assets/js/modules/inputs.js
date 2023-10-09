import { hideAll, showAll } from "./display.js";
import { tab } from "./setupGrid.js";
import { discover } from "./gameplay.js";

let revealed = false;

function setupInput() {
    document.body.addEventListener("keydown", (key) => {
        if (key.code == "Space") {
            revealed ? hideAll() : showAll();
            revealed = !revealed;
        }
    });

    for (let i = 0; i < tab.length;i++)
    {
        tab[i].refHtmlElement.addEventListener("click", () => {

            discover(i);
        });
    }
};

export {setupInput};