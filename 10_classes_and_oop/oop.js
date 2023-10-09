//1. OBject literals
// collection of properties and methods
// this keyword is used in current context of the code
const users = {
  username: "singh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // this is inside the current context of the code
    // console.log(this);
    // console.log("Got user details from DB");
    // console.log(`UserName is:${this.username}`);
  },
};
// console.log(users.username);
// console.log(users.getUserDetails());
// this in global scope/context of the code above
// console.log(this);

//2. Constructure funciton
// const promiseOne = new Promise();
// const date = new Date();
// the new keyword is the constructor function that allows u to make multiple instanes with one object literal

function User(username, loginCount, issLoggedIn) {
  // this.username is variable and rhs value is pass value
  // these are all properties
  this.username = username;
  this.loginCount = loginCount;
  this.issLoggedIn = issLoggedIn;

  // these are all methods
  this.grretings = function () {
    console.log(`Welcome ${this.username}`);
  };

  // if you do not write return.this code will work becuase it si implicitely defiend
  return this;
}

// here userTwo will overwrite the userOne value that's why we use new keyword for making it'e value new
const userOne = new User("Rahul", 12, true);
const userTwo = new User("jslearning", 11, false);
console.log(userOne instanceof User); // instanceof User will return its presence in true/false
console.log(userOne.constructor); //return reference of its own
// console.log(userTwo);

//
