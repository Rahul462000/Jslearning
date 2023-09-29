// // for loop
// 1.Basic LOOP
for (let index = 0; index < 10; index++) {
  //   const element = index;
  if (index % 2 == 0) {
    // console.log("divisible by two completely");
  }
  //   console.log(index);
}

// 2. loop inside another loop
for (let index = 0; index < 10; index++) {
  // console.log(`OuterLoop value ${index}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`InnerLoop value ${j}`);
  }
}
// 3. array and loop
let myArray = ["batman", "superman", "ironman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// 4. condition based loop with keyword
// break and continue

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of i is ${index}`);
// }

// here value at 5 will not be printed insted of condition console will print
for (let index = 1; index < 20; index++) {
  if (index == 5) {
    // console.log(`Detected 5`);
    continue;
  }
  // console.log(`value of i is ${index}`);
}
