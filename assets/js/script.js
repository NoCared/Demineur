import { hideAll, showAll } from "./modules/display.js";
import {tab,setUpTable,putRandomBombs,checkIfBomb,fillNumber} from "./modules/setupGrid.js"
import { setupInput } from "./modules/inputs.js";










setUpTable();
putRandomBombs();
fillNumber();
setupInput();
hideAll();
