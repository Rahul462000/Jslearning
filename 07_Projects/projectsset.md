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
