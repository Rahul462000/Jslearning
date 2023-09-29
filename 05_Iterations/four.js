// how to apply loop on object
const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

// 1. forin loop
for (const key in myObject) {
  // below will give u keys
  //   console.log(key);
  //   below will give u values of the keys
  //   console.log(myObject[key]);
  //   console.log(`${key} is shorcut for ${myObject[key]}`);
}

// forin in array

const myArr = ["js", "c++", "HTML"];
for (const key in myArr) {
  console.log(myArr[key]);
}

// for in in map\
// it is not iteretable

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("NZ", "Newzeland");

for (const key in map) {
  console.log(key);
}
