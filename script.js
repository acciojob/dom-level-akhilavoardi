//your JS code here. If required.
//your JS code here. If required.
const element = document.getElementById("level");

let level = 0;
let current = element;

// Traverse up the DOM tree
while (current) {
  level++;
  current = current.parentElement; // move to the parent
}

// Show the result
alert("The level of the element is: " + level);