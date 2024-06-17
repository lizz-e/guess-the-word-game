// global variables
// list of player's guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
// where the player enters a letter
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining.span");
const messages = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");
const word = "magnolia";


// function to add placeholders for the letter //
const  dotPlaceholder = function (word) {
    const letters = [];
    for (const letter of word) {
        console.log(letter);
        letters.push("●");
    };
    wordInProgress.innerText = letters.join("");
};
dotPlaceholder(word);

// event listner for the guess button / /
guessButton.addEventListener("click", function(e) {
    // prevents the form submitting and reloading page actions
    e.preventDefault();
    
    // get the player's value and display it
    const playerInput = letterInput.value;
    console.log(playerInput);
    // clear the value of the input after the button is pressed
    letterInput.value = "";
});