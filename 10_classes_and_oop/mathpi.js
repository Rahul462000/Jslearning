const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// console.log(Math.PI);
//
const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nahi bni");
  },
};
console.log(chai);
// Object descriptor will give properties of key:value pairs not complete object
console.log("oLd descripter properties");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// after getting its descriptor values we can change them too
// changing the descriptor values for object chai
Object.defineProperty(chai, "name", {
  //   writable: false,
  //   we can stop the iteration property in name property of object chai
  enumerable: false,
});
// console.log("NEw descripter properties");
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// looping through OBJECT name chai
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
