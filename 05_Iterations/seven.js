// map method looping through array
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// beow is the map loop
// const newNums = myNumbers.map((num) => num + 10);

// chainning method
// in this method we appluy more than one loop together
// here the first map value will passes to the next loop
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(newNums);
