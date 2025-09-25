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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  }; // initializing an object.
  logEntries.push(logEntry);
  // console.log(logEntries[0]); // getting the first element of the array.
  console.log(logEntries);
  console.log(logEntry.operation); // accessing property from logEntry.
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  console.log(enteredNumber, currentResult); // using console.log() to analyze our inputs code
  console.log(typeof enteredNumber, typeof currentResult); // using console.log() to analyze our inputs code
  if (calculationType === 'ADD') {
    currentResult += enteredNumber; // converts text to integer.
    mathOperator = '+';
  } else {
    currentResult -= enteredNumber;
    mathOperator = '-';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  // currentResult++; = currentResult = currentResult + 1;
  // currentResult --; = currentResult = currentResult - 1;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// event to identify when the btn was clicked, so do something.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
