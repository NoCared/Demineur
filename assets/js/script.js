function setUpTable(table)
{
    let length = table.length;
    while (length--)
    {
        const i = length;
        table[i].addEventListener("click",()=>{
            console.log(i);
            table[i].classList.toggle("backGreen");
        });
    }
}

function putRandomBombs(table)
{
    const bombNumber = table.length /5;
    for (i = 0; i < bombNumber;i ++)
    {
        const randomNumberRow = Math.round(Math.random() * 9);
        const randomNumberColumn = Math.round(Math.random() * 9);
        const index = randomNumberColumn *10 + randomNumberRow;

        if (table[index].classList.contains("bombCase") == false)
        {
            table[index].classList.toggle("bombCase");
        }
        else
        {
            i--;
        }
    }
}





const cases = document.querySelectorAll(".case");
setUpTable(cases);
putRandomBombs(cases);
