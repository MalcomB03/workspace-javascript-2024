// Generate random int.
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get the numbers
var M = randInt(300, 600);
var N = randInt(1, 100);  // Defined a range for N
var k = randInt(1, 50);   // Defined a range for k

// Update the question
document.querySelector('#total').textContent = M.toString();  // Fixed typo: 'textContext' -> 'textContent'

// Update the answers
var T = N + k;
var S = N - k;
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + " " + k.toString();  // Fixed typo: '[value]"1"' -> '[value="1"]'

// Pick the answer
function changeStyle() {
    var classname = this.getAttribute("class");
    alert("clicked class: " + classname);  // Debugging: show which class was clicked
}

// Add eventListener on the answer!!
var answerList = document.getElementsByClassName('answer');
for (var i = 0; i < answerList.length; i++) {
    answerList[i].addEventListener('click', changeStyle, false);  // Fixed the loop issue and syntax error
}

// Testing animation
// Assuming you want to animate some DOM element (e.g., a div or button)
var element = document.querySelector('.animate-me');  // You can replace '.animate-me' with the class of the element you want to animate
if (element) {
    element.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(180deg)' }
    ], {
        duration: 3000,
        fill: 'forwards'
    });
}

// Add eventListener (This part is redundant; the loop above already adds event listeners)
var answerList = document.getElementsByClassName('answer');
for (var i = 0; i < answerList.length; i++) {
    answerList[i].addEventListener('click', changeStyle, false);  // This was repeated, so I only kept the first loop
}
