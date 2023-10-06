
let cases = document.querySelectorAll(".case");
let length = cases.length;
while (length--)
{
    const i = length;
    cases[i].addEventListener("click",()=>{
        console.log(i);
        cases[i].classList.toggle("backGreen");
    });
}