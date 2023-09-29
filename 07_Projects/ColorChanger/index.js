// when a colored box is clicked the background is changed

// 1.selecting buttons
const buttons = document.querySelectorAll(".button");
// selecting body
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
  });
});
