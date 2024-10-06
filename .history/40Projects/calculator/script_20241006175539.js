const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "error";
  }
}
