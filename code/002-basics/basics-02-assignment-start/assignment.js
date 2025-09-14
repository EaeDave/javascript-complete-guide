const task3Element = document.getElementById('task-3');

// Create two new functions: One that takes no parameters and simply shows an alert()
// with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.
function showsAlert() {
  alert("Baby don't cry...");
}

function showsTextAlert(text) {
  alert(text);
}

// Call both functions directly from your code.
showsAlert();
showsTextAlert('You have my heart...');

// Add an event listener to task3Element and attach it to the first function
// (the one without arguments). Click this task thereafter to verify whether it works.
task3Element.addEventListener('click', showsAlert);

// Add a brand-new function that takes three parameters (three strings, give them any names you want)
// that returns one combined string (where the three strings are concatenated).
function concatenate(text1, text2, text3) {
  return `${text1} ${text2} ${text3}`;
}

// Call that new function directly from your code and alert() the result of that function.
alert(concatenate('David', 'is', 'cooking'));
