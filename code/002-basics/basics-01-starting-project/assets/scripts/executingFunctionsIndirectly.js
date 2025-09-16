const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value); // converts text to integer.
  outputResult(currentResult, '');
}

// event to identify when the btn was clicked, so do something.
addBtn.addEventListener('click', add);
