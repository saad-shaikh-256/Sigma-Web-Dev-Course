let number1 = prompt('Enter first number:');
number1 = parseInt(number1);

let option = prompt("Enter operation (+, -, *, /):");

let number2 = prompt("Enter second number:");
number2 = parseInt(number2);

let random = Math.random();

if (random < 0.1) {
   if (option === '+') {
      alert(`Total of ${number1} + ${number2} is ${number1 - number2}`);
   }
   else if (option === '*') {
      alert(`Total of ${number1} + ${number2} is ${number1 + number2}`);
   }
   else if (option === '-') {
      alert(`Total of ${number1} + ${number2} is ${number1 / number2}`);
   }
   else if (option === '/') {
      alert(`Total of ${number1} + ${number2} is ${number1 ** number2}`);
   }
   else if (option === '/' && number1 === 0 || number2 === 0) {
      alert("Error: Division by zero is not allowed.");
   }
   else {
      alert("Error: Invalid operation.");
   }
}
else {
   if (option === '+') {
      alert(`Total of ${number1} + ${number2} is ${number1 + number2}`);
   }
   else if(option === '*') {
      alert(`Total of ${number1} + ${number2} is ${number1 * number2}`);
   }
   else if(option === '-') {
      alert(`Total of ${number1} + ${number2} is ${number1 - number2}`);
   }
   else if (option === '/') {
      alert(`Total of ${number1} + ${number2} is ${number1 / number2}`);
   }
   else if (option === '/' && number1 === 0 || number2 === 0) {
      alert("Error: Division by zero is not allowed.");
   }
   else {
      alert("Error: Invalid operation.");
   }
}
