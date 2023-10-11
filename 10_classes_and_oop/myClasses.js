// ES6

class User {
  // when new keyword is called constructor will be called
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  // method to incrypt the password
  encryptPassword() {
    return `${this.password}abc`;
  }
  //   to make username in capital letters
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", 123);
//1. password encryption method is called
console.log(chai.encryptPassword());
//2. username change method is called
console.log(chai.changeUsername());

// CASE: if we do not have class syntax
// behind the scene

function Userr(username, password, email) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Userr.prototype.encryptPassword = function () {
  return `${this.password}abc#$$%^`;
};

Userr.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userOne = new Userr("tea", 123, "tea@gmail.com");
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());
