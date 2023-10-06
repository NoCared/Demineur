function hideAll(tab){
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.add("hidden");
    }
};
function showAll(tab){
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("hidden");
    }
};


export{hideAll,showAll};