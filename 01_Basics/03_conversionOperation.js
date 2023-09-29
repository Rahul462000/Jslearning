let score = 33;
// given below are two method for checking type of variable
// console.log(typeof score);
// console.log(typeof (score));

// given below is the method of converison for a variable value
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "singh";
// console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "singh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

// here we can also change the sign of the variable value
let value = 3;
let negValue = -value;
// console.log(negValue);

// concatenation in a string representation
let str1 = "hello";
let str2 = "singh";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(((3 + 4) * 5) % 3);

// console.log(+true); // 1
// console.log(+""); // 0

// given below is not a safe code writing example
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
