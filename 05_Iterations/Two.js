//1. while loops
let index = 0;
while (index <= 10) {
  //   console.log(`VAlue of index is: ${index}`);
  //   we can indcerement it as many times as needed
  index = index + 2;
}

// 2. while loop with array

let myArray = ["batman", "superman", "ironman"];
let index1 = 0;
while (index1 < myArray.length) {
  let element = myArray[index1];
  //   console.log(`VAlue of index is: ${element}`);
  index1++;
}

// 3. do while
// let score = 1;

// do {
//   console.log(`Score: ${score}`);
//   score = score + 1;
// } while (score <= 10);

// special case
// here the initial value is 11 but in do while loop first work is done then conditon is schecked
// therefore 11 is printed and then when condition is checked value is out of the condition
let score = 11;
do {
  console.log(`Score: ${score}`);
  score++;
} while (score <= 10);
