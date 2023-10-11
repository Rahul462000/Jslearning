// understanding prototype
// goal :

let myNameOne = "singh";
// console.log(myNameOne.length); //5
let myNameTwo = "singh    ";
// console.log(myNameTwo.truelength()); // undefined

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
// \created a method by accessing the by default Object methods
// object have universal access to all array and string methods with function also
Object.prototype.singh = function () {
  console.log("`singh is present in all object");
};

// array works with array only not with funciton
Array.prototype.heysingh = function () {
  console.log(`singh says hi`);
};

// Object.prototype power
// heroPower.singh();  // works
// myHeros.singh();   // works

// Array.prototype power
// myHeros.heysingh(); // works
// heroPower.heysingh()   // not work

// Inheritance

const User = {
  name: "chai",
  eamil: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvaliable: false,
};

const TaSupport = {
  makeAssignment: "JS Assignment",
  fulltime: true,
  //   old method for assecessing the above object properties
  __proto__: TeacherSupport,
};

// or
// linking two differnet information with each other
Teacher.__proto__ = User;

// modern Syntax

Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUsername = "ChaiaurCode";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};
anotherUsername.trueLenght();

"singh".trueLenght();
"coffee    ".trueLenght(); // space will not counted as trim() is applied
