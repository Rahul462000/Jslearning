# Projects related to DOM

## project link

# solution code

## project 1

```javascript
console.log("singh");
// when a colored box is clicked the background is changed

// 1.selecting buttons
const buttons = document.querySelectorAll(".button");
// selecting body
const body = document.querySelector("body");
const bodyText = body.querySelector("h2");
console.log(bodyText);
const colors = ["grey", "white", "Aquamarine", "DarkGoldenRod", "B5CB99"];
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // taking the first color if grey is clicked with id
    if (e.target.id === "grey") {
      // it will change the background colour
      body.style.backgroundColor = e.target.id;
      // below we are targetting the h2 tag and changing its color
      bodyText.style.color = "white";
      bodyText.innerHTML = "grey is clicked";
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      // below we are targetting the h2 tag and changing its color
      bodyText.style.color = "grey";
      bodyText.innerHTML = "white is clicked";
    } else if (e.target.id === "Aquamarine") {
      body.style.backgroundColor = e.target.id;
      // below we are targetting the h2 tag and changing its color
      bodyText.style.color = "red";
      bodyText.innerHTML = "Aquamarine is clicked";
    } else if (e.target.id === "DarkGoldenRod") {
      body.style.backgroundColor = e.target.id;
      // below we are targetting the h2 tag and changing its color
      bodyText.style.color = "blue";
      bodyText.innerHTML = "DarkGoldenRod is clicked";

      // here in this method can also change the color like given below method
    } else if (e.target.id === "B5CB99") {
      body.style.backgroundColor = "#B5CB99";
      // below we are targetting the h2 tag and changing its color
      bodyText.style.color = "orange";
      bodyText.innerHTML = " B5CB99 is clicked";
    }
  });
});
```

## project 2

```javascript
// selecting form first
const form = document.querySelector("form");
const textguide = document.querySelector("#guide");

// stopping default submittion of the form
// here we take the input value of placeholder after button is cliked not taken before btn is licked
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // seleting the height and weight as it is a placeholder value we need it to be get converted
  const height = parseInt(document.querySelector("#height").value);
  console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(weight);
  const results = document.querySelector("#results");

  //   adding checks because the formula for BMI can destroy code
  // here isNan(height) will check for not a number presence in the input
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  }
  //   results.innerHTML = ` ${height}`;
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    // formula for calculating BMI with fixed value upto two decimal points
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // to show the result
    if (parseInt(bmi) < 18.6) {
      results.innerHTML = `${bmi} you are underwight`;
    } else if (parseInt(bmi) > 18.6 && parseInt(bmi) <= 24.9) {
      results.innerHTML = `${bmi} you are normal`;
    } else {
      results.innerHTML = `${bmi} you are  overwight`;
    }
  }
});
```

## project3

```javascript
// selectin gthe clock id
const clock = document.querySelector("#clock");

// an event method that run after desire time given
setInterval(function () {
  // getting the time from here
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4

```javascript
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
    if (numGuess === 11) {
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
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```
