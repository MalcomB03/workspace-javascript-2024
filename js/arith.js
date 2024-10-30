// Get the elements
let spanE1 = document.getElementById('num1'); // Ensure this ID is correct
let spanE2 = document.getElementById('num2'); // Change this ID if needed
console.log("spanE1 -", spanE1);

// Element --- property
let n1 = parseInt(spanE1.textContent, 10); // Parse as base 10
let n2 = parseInt(spanE2.textContent, 10); // Parse n2 as an integer
console.log(typeof n1);

// Process
var c = n1 + n2;

// Display
console.log(c); // Use console.log to display the result
// Optionally, you can update an HTML element instead of using document.write
// document.getElementById('result').textContent = c; // Assuming you have an element to display the result
