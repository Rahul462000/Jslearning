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
