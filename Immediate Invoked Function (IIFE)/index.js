// Immediatley Invoked Function Expression (IIFE)
// It is used to get resolved from the problem caused by  the pollution of global scope variable declaratoin

// this is how IIFE is declared
(function chai() {
  // it is an named IIFE
  console.log(`DB CONNECTED`);
})();
// semicolun is very important here

// first bracket  is for fucntion defenation and second () is for calling the fucntion or execution

((name) => {
  // simple IIFE
  console.log(`DB CONNECTED TWO, ${name}`);
})("singh");
