import { init, redimension, restart } from "./modules/setupGrid.js";



init();




const restartButton = document.querySelectorAll(".restartButton input");
restartButton.array.forEach(element => {
    element.addEventListener("click",restart);
});

const addDimensionButton = document.querySelector("#redimensionAdd img");
addDimensionButton.addEventListener("click",() => redimension(1));
const removeDimensionButton = document.querySelector("#redimensionRemove img");
removeDimensionButton.addEventListener("click",() => redimension(-1));