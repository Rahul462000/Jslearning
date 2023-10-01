// selectin gthe clock id
const clock = document.querySelector("#clock");

// an event method that run after desire time given
setInterval(function () {
  // getting the time from here
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
