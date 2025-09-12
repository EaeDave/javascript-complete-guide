const defaultResult = 0;
let currentResult; // in js you would only declare without initialize a variable.
currentResult = 0; // then, initialize a value like this.

currentResult = currentResult + 10; // adding the last result plus the new result.
currentResult += 10; // other way to do it.

// defaultResult = currentResult;  // constants can't be reassign.
let calculationDescription = '10 + 10';
calculationDescription = '"10 + 10"'; // showing double quotes using single quotes to define the string.
// template literals
calculationDescription = `Showing a data of an variable


${currentResult}`; // using backtick to interact javascript data to a string.

let errorMessage = 'An error \n' + 'occurred!';

outputResult(currentResult, errorMessage);
