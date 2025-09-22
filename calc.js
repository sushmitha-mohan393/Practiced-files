/* const display=document.getElementById("display");
function appendToDisplay(input)
{
    display.value+=input;
} */
let string = "$";
const buttons = document.querySelectorAll('.box');
const inputElement = document.querySelector('.display');


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        string += e.target.innerHTML;
      
        inputElement.value = string;
        console.log('inputelement',inputElement.value);
        
    });
   
});
 function appendToDisplay()
    {
        const inputElement = document.querySelector('.display');
        const bal=document.querySelector('.bal')
     /*    inputElement.addEventListener("input", () => {
    localStorage.setItem("bal", inputElement.value);
  }); */
         localStorage.setItem("balance", inputElement.value);
        console.log('balance',bal);
        
        // bal.value =inputElement.value;
        // console.log('balance',bal)
        window.location.href="finance.html";
    }




