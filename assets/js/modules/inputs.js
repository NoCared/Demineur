import { hideAll, showAll } from "./display.js";
import { tab } from "./setupGrid.js";
import { discover, putFlag } from "./gameplay.js";

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
        tab[i].refHtmlElement.addEventListener('contextmenu', function(ev) {
            ev.preventDefault();
            putFlag(i);
            return false;
        }, false);
    }
};

export {setupInput};