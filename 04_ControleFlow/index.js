// shorthand condition checking
// const balance = 1000;
// given below is the implicit sope
// if (balance > 500) console.log("balance is sufficent");
// nested condition with the help of logic gates AND OR NOT && || !

// const userLoggedIn = true;
// const debitedCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitedCard) {
//   console.log("allow them to enter");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("allow them to enter");
// }

// const userEmail = "singh@gmail.com";

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// } else {
//   console.log("Array contains user email");
// }

// checking empty objects

const iSObject = {};

// Object.keys(objectName) will return properties like array and we can use its length to do some operations
if (Object.keys(iSObject).length === 0) {
  console.log("object is empty");
} else {
  console.log("object contains properties");
}

// there are some properties like
// false == 0 it gives true
//false == '' it gives true
// 0 == '' it gives true

// NOTE a new type of operator
// Nullish Coalescing operator (??) : null, undefined
// operation to check safety if null is returned as output
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;  >> 10
// val1 = undefined ?? 15; >> 15
// val1 = null ?? 10 ?? 15;

// console.log(val1);

// /// ternary operator

const icePrice = 100;
icePrice >= 80 ? console.log("less than 80 ") : console.log("greater than 80 ");
