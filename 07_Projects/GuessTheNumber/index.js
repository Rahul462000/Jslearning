// generate a random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// submit btn
const submit = document.querySelector("#subt");

// userinput value
const userInput = document.querySelector("#guessField");
// user previous guess
const guessSlot = document.querySelector(".guesses");
// last result / guessREmaing
const remaining = document.querySelector(".lastResult");

// lowerhigh value to tell weither a guess is less or high
const lowOrHi = document.querySelector(".lowOrHi");
// here we will make user start again when his remaining chances are over
const startOver = document.querySelector(".resultParas");
// for inserting new values
const p = document.createElement("p");

// all previous value entered by the user and storing in  array
// and make it visible to user that what he have entered
let prevGuess = [];
// how many attempts were made by user
let numGuess = 1;

// it allow you to play game
let playGame = true;
// to check whether you available to play game or not
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    // user inout value is stored here
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//
function validateGuess(guess) {
  //  this funciton work is to validate the guess made by the user is validate or not
  //   that is value shouldnot be negative or Nan and lie btw 1-100
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a numner less than 100");
  } else {
    // pushing the number into the array
    prevGuess.push(guess);
    // if attempt is last or not
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      //   end the game
      endgame();
    } else {
      displayGuess(guess);
      // check guess right or not
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // based on checkGuess give msg
  if (guess === randomNumber) {
    displayMessage(`Your guessed right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOOO LOW`);
  } else if (guess > randomNumber) {
    displayMessage(`NUmber is TOOOOO high`);
  }
}

function displayGuess(guess) {
  //update the user entered guess/value with empty string
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess} `;
  //   the number of guess will increases
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // interact with DOM empty the value of user
  //   add innerHTML toDOM
  // reduce the numbers guessRemaing
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  // to end current game
  //   clear all user input
  userInput.value = "";
  //   shouldn;t add new value with key value pairs
  userInput.setAttribute("disabled", "");
  //   start button means a class is added that act like a button
  p.classList.add("button");
  //   add a inner html
  p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  //   now newgame will run
  newGame();
}
function newGame() {
  // to start a new game
  const newGamebutton = document.querySelector("#newGame");
  newGamebutton.addEventListener("click", function (e) {
    // resetting all variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
