const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // initializing an array.

function getUserInput() {
  return parseInt(userInput.value);
}

// This is a comment!
// Another line!

/**
 * This is a block comment
 * every thing inside
 * will not be
 * interpreted.
 */

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber; // converts text to integer.
  createAndWriteOutput('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  }; // initializing an object.
  logEntries.push(logEntry);
  // console.log(logEntries[0]); // getting the first element of the array.
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  // currentResult++; = currentResult = currentResult + 1;
  // currentResult --; = currentResult = currentResult - 1;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

// event to identify when the btn was clicked, so do something.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
