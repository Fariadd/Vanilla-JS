const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

let currentInput = ""; // Store the input numbers and operations
let firstOperand = ""; // Store the first number
let operator = "";     // Store the operator (+, -, *, /)
let isSecondOperand = false; 
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if(value >= "0" && value <= "9"){

    }
  });
});
function handleNumber(number){
    if(isSecureContext)
}