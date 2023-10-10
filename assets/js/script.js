import { init, restart } from "./modules/setupGrid.js";



init();




const restartButton = document.querySelector("#restartButton input");
restartButton.addEventListener("click",restart);