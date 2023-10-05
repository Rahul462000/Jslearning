// generate a random color

const randomcolor = function () {
  // hex values in colors
  const hex = "0123456789ABCDEF";
  let color = "#";
  //   loop for the color position
  for (let i = 0; i < 6; i++) {
    // generating a random value
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// checking the color
console.log(randomcolor());

// the interviewId when called again and again is not so good so we will null its value after stopage
let intervalId;
// to start the change in the backgrouond color
const startChangingColor = function () {
  // to make the change in loop
  //   when interviewId become null we need to check or safety check
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  console.log("started");
  // accessing the body
  function changeBgColor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopChangingColor = function () {
  console.log("stopped");
  clearInterval(intervalId);
  //   flushOut the intervalId to make our memory free a little bit
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
