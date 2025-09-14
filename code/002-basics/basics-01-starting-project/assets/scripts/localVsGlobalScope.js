const defaultResult = 0;
let currentResult = defaultResult;
let result; // global variable.

// functions can access all global variables.
function add(num1, num2) {
  // we can't use local/block-scope variables outside directly (globally).
  const result = num1 + num2; // local variable (function scope).
  return result;
}

currentResult = add(1, 2);
console.log(currentResult);
