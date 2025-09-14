const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult += currentResult + userInput.value;
  outputResult(currentResult, '');
}

// event to identify when the btn was clicked, so do something.
addBtn.addEventListener('click', add);
