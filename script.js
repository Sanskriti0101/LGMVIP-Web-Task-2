let display = document.getElementById("display");
let currentExpression = "";

function appendToDisplay(value) {
  currentExpression += value;
  display.value = currentExpression;
}

function calculate() {
  try {
    currentExpression = eval(currentExpression);
    display.value = currentExpression;
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  currentExpression = "";
  display.value = "";
}
