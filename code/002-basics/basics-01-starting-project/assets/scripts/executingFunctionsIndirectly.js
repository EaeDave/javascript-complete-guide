const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber; // converts text to integer.
  outputResult(currentResult, calcDescription);
}

// event to identify when the btn was clicked, so do something.
addBtn.addEventListener('click', add);
