// Get the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = ""; // Store the input numbers and operations
let firstOperand = ""; // Store the first number
let operator = ""; // Store the operator (+, -, *, /)
let isSecondOperand = false; // Track if we're entering the second number

// Loop through each button and add click event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent; // Get the button's text

    if (value >= "0" && value <= "9") {
      // If it's a number, add it to the display
      handleNumber(value);
    } else if (value === "C") {
      // If it's C, clear everything
      clearDisplay();
    } else if (value === "=") {
      // If it's =, calculate the result
      calculate();
    } else {
      // Otherwise, it's an operator (+, -, *, /)
      handleOperator(value);
    }
  });
});

// Handle number input
function handleNumber(number) {
  if (isSecondOperand) {
    // If entering the second operand, reset display first
    display.value = number;
    isSecondOperand = false;
  } else {
    // Continue adding to current number
    display.value = display.value === "0" ? number : display.value + number;
  }
}

// Handle operator input
function handleOperator(selectedOperator) {
  // If there's no first operand, save the current input as the first operand
  if (firstOperand === "") {
    firstOperand = display.value;
  } else if (operator !== "") {
    // If there's already a first operand and operator, calculate the result before applying the new operator
    calculate();
  }
  // Save the selected operator and prepare for second operand
  operator = selectedOperator;
  isSecondOperand = true; // The next number entered will be the second operand
}

// Calculate the result
function calculate() {
  if (firstOperand === "" || operator === "") return; // If there's no operation, do nothing

  const secondOperand = display.value; // Get the second number
  let result;

  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }

  display.value = result; // Display the result
  firstOperand = result; // Set the result as the new first operand for potential next operations
  operator = ""; // Clear operator after calculation
}

// Clear everything (C button)
function clearDisplay() {
  display.value = "0";
  firstOperand = "";
  operator = "";
  isSecondOperand = false;
}
