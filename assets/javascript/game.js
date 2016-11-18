// Global Variables
// =========================================
// Arrays and Variables for holding data
$(document).ready(function() {
    // Holds random number generated at start of game
    var randomNum;

    // Holds random number for red crystal
    var redNum;

    // Holds random number for blue crystal
    var blueNum;

    // Holds random number for yellow crystal
    var yellowNum;

    // Holds random number for green crystal
    var greenNum;

    // Game counter
    var winCounter = 0;
    var lossCounter = 0;

})

// Functions (Reusable blocks of code that I will call upon when needed)
// =========================================

// startGame()
// Its how we we will start and restart the game. (Note: It's not being run here. It's just being made for future use.)
function startGame() {

    //Random number chosen
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    //Random number for red crystal
    redNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    //Random number for blue crystal
    blueNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    //Random number for yellow crystal
    yellowNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    //Random number for green crystal
    greenNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    console.log(randomNum);
    console.log(redNum);
    console.log(blueNum);
    console.log(yellowNum);
    console.log(greenNum);

}

function ranNumPush() {
    $(".ranNum").html(randomNum);
}

function redNumPush() {
    $(".red").html(redNum);
}

function blueNumPush() {
    $(".blue").html(Num);
}

function yellowNumPush() {
    $(".yellow").html(yellowNum);
}

function greenNumPush() {
    $(".green").html(greenNum);
}

$(document).on("click", "button", function() {

            if ($(this).hasClass("red")) {

                console.log('red click');
            } if ($(this).hasClass("blue")) {
              console.log('blue click');
            } if ($(this).hasClass("yellow")) {
              console.log('yellow clikc');
            } if ($(this).hasClass("green")) {
              console.log('green click')
            }
        })

        // function restartGame() {
        //     document.querySelector("#guessed-letters").innerHTML = "";
        //     this.wordInPlay = null;
        //     this.lettersOfTheWord = [];
        //     this.matchedLetters = [];
        //     this.guessedLetters = [];
        //     this.guessesLeft = 0;
        //     this.totalGuesses = 0;
        //     this.letterGuessed = null;
        //     this.setupGame();
        //     this.rebuildWordView();
        // }
        //
        // // function randomNum(min, max) {
        // //     min = Math.ceil(19);
        // //     max = Math.floor(120);
        // //     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
        // // }
        // //
        // // function ranButNum(min, max) {
        // //     min = Math.ceil(1);
        // //     max = Math.floor(12);
        // //     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
        // // }


        // Main Process
        // =========================================
        // Initiates the code the first time
startGame();
