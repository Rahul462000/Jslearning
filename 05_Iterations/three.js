// HIGHER ORDER ARRAY LOOPS

//1. for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  if (num % 2 == 0) {
    // console.log(num);
  }
}

// just small case with variable
const greeetings = "hello, world";
for (const greet of greeetings) {
  // console.log(`Each char is ${greet}`);
}

// maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("NZ", "Newzeland");

// console.log(map);

// loops in a map with destructuring of array
for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// loop on object

const myObject = {
  game1: "NFS",
  game2: "GTA",
  game3: "HITMAN",
};
// the given below will not be iterated through the loop
for (const [key, value] of myObject) {
  // console.log(key, ":-", value);
}
