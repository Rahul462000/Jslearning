// comparisions are used to determine the correct value from given two or three values

// NOTE: = assign the value
// == check the value against it without dataType
// === check the value against it with dataType

// 1.greater than
console.log(2 > 1);

// 2.greater than or equal
console.log(2 >= 1);

// 3.less than
console.log(2 < 1);

//4. equivalence to rhs
console.log(2 == 1); // false

// 5.not equal to rhs
console.log(2 != 1);

// 6. here differnt dataType comparion is checked
// but it will not consider the dataType
console.log("2" > 1);
console.log("02" > 1);

// 7.null comparison
// as null is a empty value
// and in js when null is compared it is converted to a value then checked
console.log(null > 0); //false as 0cannot be greator to 0
console.log(null == 0); //false as 0 cannot be equal to 0
console.log(null >= 0); // here it is true

// 8.undefined comparision checking
console.log(undefined == 0); //flase
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//9. === this comparision with dataType
console.log("2" === 2); //flase
console.log("2" === "2"); // true
