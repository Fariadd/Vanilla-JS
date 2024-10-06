const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  display.value = eval();
}
