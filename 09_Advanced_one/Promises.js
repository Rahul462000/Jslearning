//1. creating promises
// 1.promiseOne
// new keyword is the instance of new promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an asynchronous/async task
  // DB calls, cryptoTasks, cryptography, network
  setTimeout(function () {
    console.log("async task completed");
    //1b. connected resolve here with .then
    resolve();
  }, 1000);
});

//1a. consuming the promise here
// this is connected with resolve
promiseOne.then(function () {
  console.log("promise consume");
});

// 2. PromiseTwo
// a complete short method for calling promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

// 3. PromiseThree
// passing parameteres in resolve
const promiseThree = new Promise(function (resolve, reject) {
  // if data comes from a network connection
  setTimeout(function () {
    // passing data inside resolve
    resolve({ username: "chai", email: "chai@chaicodeexample.com" });
  }, 1000);
});

// getting data
promiseThree.then(function (user) {
  console.log(user);
});

// 4.Promise4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // error based checking
    let error = false;
    if (!error) {
      resolve({ username: "coder", email: "coder@gmail.com" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
    // chaining in .then method
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    // catch is important because we can also have some errors
    console.log(err);
    // finally will tell that your work is completed after  a certain time
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

//5.PromiseFive

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ Username: "JAvascript", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// consuming promise with asyn and await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetchig data with fetch

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
