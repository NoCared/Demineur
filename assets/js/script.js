import { hideAll, showAll } from "./modules/display.js";
import {tab,setUpTable,putRandomBombs,checkIfBomb,fillNumber} from "./modules/setupGrid.js"
import { setupInput } from "./modules/inputs.js";
import { randomStart } from "./modules/gameplay.js";










setUpTable();
putRandomBombs();
fillNumber();
setupInput();
hideAll();
randomStart();
