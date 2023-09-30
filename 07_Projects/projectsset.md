# Projects related to DOM

## project link

# solution code

## project 1

```javascript
console.log("Rahul");
// when a colored box is clicked the background is changed

// 1.selecting buttons
const buttons = document.querySelectorAll(".button");
// selecting body
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // taking the first color if grey is clicked with id
    if (e.target.id === "grey") {
      // it will change the background colour
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
