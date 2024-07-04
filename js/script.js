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
const guessedLettersList = [];


// function to add placeholders for the letter //
const  dotPlaceholder = function (word) {
    const letters = [];
    for (const letter of word) {
        console.log(letter);
        letters.push("●");
    }
    wordInProgress.innerText = letters.join("");
};

dotPlaceholder(word);

// event listner for the guess button / /
guessButton.addEventListener("click", function(e) {
    // prevents the form submitting and reloading page actions
    e.preventDefault();
    // empty the message element
    messages.innerText = "";

    // get the player's value and display it
    const playerInput = letterInput.value;
    console.log(playerInput);

    // the guess passed the lettercheck
    const goodGuess = letterCheck(playerInput);

    if (goodGuess) {
        makeGuess(playerInput);
    }

    // clear the value of the input after the button is pressed
    letterInput.value = "";
});

// func to validate player's input
const letterCheck = function (input) {
    // variable that accepts letters. 
    // this var uses a regular expression as it's value
    const acceptedLetters = /[a-zA-Z]/;
    if (input.length === 0) {
        messages.innerText = "Please enter a letter.";
    }
    else if (input.length > 1 ) {
        messages.innerText = "Please enter one letter at a time.";
    }
    else if (!input.match(acceptedLetters)) {
        messages.innerText = "Please enter a letter from A to Z.";
    }
    // return the letter
    else {
        return input;
    }
};

// function to capture input
const makeGuess = function (playerInput) {
    // change player's letter into uppercase
    playerInput = playerInput.toUpperCase();

    // check if that letter is already in the array. if it is message
    if (guessedLettersList.includes(playerInput)) {
        messages.innerText = "You have already guessed that letter. Type a diffrent letter";
    }
    // if not append that letter input into the array
    else {
        guessedLettersList.push(playerInput);
        console.log(guessedLettersList);
        // guessed letters list
        showGuessedLetters();
        wordProgress(guessedLettersList);
    }
    // note: use push.() instead of .append(). the list was empty so there nothing to put the letter behind.
    // push adds value to the front of the array while append adds it at the end of the array.
};

//  function to show guessed letters
const showGuessedLetters = function () {
    // empty the player's guess list
    guessedLetters.innerHTML = "";

    // create new list item for letters to show on the html page
    for (const letter of guessedLettersList) {
        const list = document.createElement("li");
        // add letters to show on html page
        list.innerText = letter;
        // add the letters to the list
        guessedLetters.append(list);
    }
};

// function to update word in progress -- will replace the dots with the correct guessed letters
const wordProgress = function (guessedLettersList) {
    // change word to uppercase for makeGuess func
    const wordUpper = word.toUpperCase();
    // this splits the word string into in the GLL array
    const wordArray = wordUpper.split("");
        // console.log(wordArray); 
    const guessUpdate = [];

    // check if wordArray contains ant letters from gLL array
    for (const letter of wordArray) {
        // changes the dot with the correct letter guess
        if (guessedLettersList.includes(letter)) {
            guessUpdate.push(letter.toUpperCase());
        }else {
            guessUpdate.push("●");
        }
    }
    // console.log(guessUpdate);
    // this updates the empty paragraph on th page
    wordInProgress.innerText = guessUpdate.join("");
    wordCheckWin();
};

// function to check if player guessed the word and won the game
const wordCheckWin = function() {
    if (wordInProgress.innerText === word.toUpperCase()) {
        messages.classList.add("win");
        messages.innerHTML = `<p class="highlight"> You guessed correct the word! Congrats ヾ( ˃ᴗ˂ )◞ !</p>`;
    }
};