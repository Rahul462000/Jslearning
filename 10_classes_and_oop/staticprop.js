class User {
  constructor(username) {
    this.username = username;
  }
  // method
  logMe() {
    console.log(`USENAME: ${this.username}`);
  }
  // when a user is created it gets a unique ID
  //  ivf we do not want to pass this id to those object which are inherited
  static createID() {
    return `123`;
  }
}

const singh = new User("singhhh");
console.log(singh); //singhhh
// it will access the createID function when static is not provided
// console.log(singh.createID()); //123

// when static is given to access it

class Teacher extends User {
  constructor(user, email) {
    super(user);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "apple@gmail.com");
console.log(iphone);
console.log(iphone.logMe());
console.log(iphone.createID());
