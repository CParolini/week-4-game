// Global Variables
// =========================================
// Arrays and Variables for holding data
var newGame;

// Functions (Reusable blocks of code that I will call upon when needed)
// =========================================

function randomNum(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

function ranButNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Main Process
// =========================================
// Initiates the code the first time
