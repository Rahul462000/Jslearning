// value outside of condition is global scope & can be accessed in the blockscope condition

// var is the most notorious method for declaring a variable as it's value can be change at any time
// var c = 300;

let a = 300;
// value inside the condition is block scope
if (true) {
  let a = 200;
  const b = 100;
  // console.log("INNER:", a);
}

// console.log("outer:", a);

// function execution in scope process in javascript also called nested scope

function one() {
  const username = "singh";

  function two() {
    const website = "youtube";
    // given below is the global variable which can be accessed from anywher
    // console.log("user:", username);
  }
  // below is the inhouse variable which cannot be accessed outside of the funciton house
  console.log(website);
  two();
}
// one();

if (true) {
  const username = "singh";
  if (username === "singh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // this will show error because username is declare outside of the condition
  // console.log(website);
}
// this will also show error
// console.log(username);

// ++++++++++++++++++ interesting +++++++++++//
// we can access the function below before it's declaration line as because it's calling method
addone(5);
function addone(num) {
  return num + 1;
}

// given below function calleing method cannot be called as it's funciton is stored inside a variable
// addtwo(5);
// given below function is also called expresion
const addtwo = function (num) {
  return num + 2;
};

addtwo(5);
