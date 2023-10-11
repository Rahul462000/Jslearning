class User {
  constructor(username) {
    this.username = username;
  }

  // a method
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}
// now chaning the above class User

class Teacher extends User {
  // overwrite the user constructor
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  // make a custom method
  addCourse() {
    console.log(` A New course added by ${this.username} `);
  }
}

const chai = new Teacher("chai", "cahi@gmail.com", 123);
chai.addCourse();

// here masalachai do not have access of addCourse method
const masalaChai = new User("masalaChai", "masala@gmail.com", 123);
masalaChai.logMe();

// to compate them
// because it have a reference to parent class not absolute value
console.log(chai === masalaChai); //false
console.log(chai === Teacher); //false
// to check it we use instanceof
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
