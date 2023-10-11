

function displayResult(isWin)
{
    document.getElementById("overlayEnd").style.display = "block";


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