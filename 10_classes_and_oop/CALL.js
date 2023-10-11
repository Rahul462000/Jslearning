function setUserName(userName) {
  // complex calc
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  // calling above fucntion with it's parameters
  //   but in actual this is not calling inside of it
  //   because it is only a reference not call
  //   setUserName(userName);

  //   method in js for calling this
  //   now we also have to give a reference to it that is this
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@google.com", 123);
console.log(chai);
