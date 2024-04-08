document.getElementById('calculateBtn').addEventListener('click', function() {
  // Get user input
  let operation = document.getElementById('operation').value;
  let num1 = parseFloat(document.getElementById('number1').value);
  let num2 = parseFloat(document.getElementById('number2').value);
  let resultInput = document.getElementById('result');

  // check if numbers are valid or not
  if (isNaN(num1)|| isNaN(num2)) {
    resultInput.value = 'Provide valid number'
    return
  }

  // calculate based on selected operation
  switch(operation) {
    case 'add':
      resultInput.value = num1 + num2;
      break;
    case 'subtract':
      resultInput.value = num1 - num2;
      break;
    case 'multiply':
      resultInput.value = num1 * num2;
      break;
    case 'divide':
      if (num2 !== 0) {
        resultInput.value = num1 / num2;
      } else {
        resultInput.value = "Cannot divide by zero";
      }
      break;
    default:
      resultInput.value = "Select operation";
  }
});