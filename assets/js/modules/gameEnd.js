

function displayResult(isWin)
{
    document.getElementById("overlayEnd").style.display = "block";
    if (isWin)
    {
        document.getElementById("overlayWin").style.display="block";
        document.getElementById("overlayLose").style.display="nonr";
    }
    else{
        document.getElementById("overlayWin").style.display="none";
        document.getElementById("overlayLose").style.display="block";
    }
}


function win()
{
    displayResult(true);
}

function lose()
{
    displayResult(false);
}



export {win,lose};