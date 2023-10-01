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
