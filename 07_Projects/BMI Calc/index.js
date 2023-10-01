// selecting form first
const form = document.querySelector("form");

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
    results.innerHTML = `Please enter a valid height`;
  }
  //   results.innerHTML = ` ${height}`;
});
