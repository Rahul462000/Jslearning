const user = {
  username: "singh",
  price: 999,

  welcomeMessage: function () {
    // whenever we want to refer to current context we use this keyword
    // current context means inside curly brackets from line 1 to line 10
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// now changiing the value of the key in the object
// user.username = "singhhhh";
// user.welcomeMessage();
// this will print empty
// console.log(this);

// note in browser the engine is running calling object called window
// this only works with object in javascript

// +++++++++++++++++++++++++++++++++++++++++++++++++

function cofee() {
  const usernamee = "singh";
  // below code will show error as this is only be used in objects
  console.log(this.usernamee);
}
// cofee();

// //////// arrow functions

const coffee = () => {
  let username = "singh";
  // return empty {} only
  console.log(this);
};

// coffee();

// implicit arrow functions

const sum = (num1, num2) => num1 + num2;
// console.log(sum(3, 5));
// or given below is also an method of writing a implicit function
const sum2 = (num1, num2) => num1 + num2;
// console.log(sum2(2, 3));
const r1 = () => ({ usernameee: "singh" });
console.log(r1());
