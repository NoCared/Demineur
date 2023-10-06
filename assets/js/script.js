import { hideAll, showAll } from "./modules/display.js";
import {cases,tab,setUpTable,putRandomBombs,checkIfBomb,fillNumber} from "./modules/setupGrid.js"









let revealed = false;
document.body.addEventListener("keydown",(key)=>{
    if(key.code == "Space")
    {
        revealed ? hideAll(cases): showAll(cases);
        revealed = !revealed;
    }

})

setUpTable();
putRandomBombs();
fillNumber();
hideAll(cases);
