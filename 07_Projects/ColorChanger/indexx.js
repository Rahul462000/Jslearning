console.log("singh");
// selecting the buttons

const buttons = document.querySelectorAll(".button");
// selecting the body as code will change the body color
const body = document.querySelector("body");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
