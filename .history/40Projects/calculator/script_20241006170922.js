const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let firstOperand = null;
let operator = null;
let resetScreen = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if(value >= "0" && value <= "9")
  });
});
