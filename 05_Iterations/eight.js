// reduce method looping
// given below the 0 is the initial value for the accumilator
// working of reduce like  this ---> acuumilator initial value = 0 then current value is 1 add them we get 1 which will store in accumilator as new initial value
// then again 1 + new current value whcih is 2 we get 3 and this process continues

// this is with function
const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (accumilator, currentValue) {
//   console.log(`accumilator:${accumilator} and currentValue: ${currentValue}`);
//   return accumilator + currentValue;
// }, 3);

// this is with arrow function

const myTotal = myNums.reduce((accu, curr) => {
  //   console.log(`accumilator:${accu} and currentValue: ${curr}`);
  return accu + curr;
});

// console.log(myTotal);

// reduce with objects
const shoppingCart = [
  {
    itemName: "js course",
    price: 299,
  },
  {
    itemName: "web course",
    price: 399,
  },
  {
    itemName: "mobile course",
    price: 599,
  },
  {
    itemName: "mechanical course",
    price: 1299,
  },
];

const pricePay = shoppingCart.reduce((acc, item) => {
  console.log(`accu:${acc} and currewntValue:${item}`);
  return acc + item.price;
}, 0);

console.log(pricePay);
