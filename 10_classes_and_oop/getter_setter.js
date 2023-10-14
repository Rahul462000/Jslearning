class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  //   getter
  //   to stop the race between the constructor and getter make a new variable
  get password() {
    // normal mwthod
    // return this._password.toUpperCase();
    // to change the password when getting it
    return `${this._password}Singherer`;
  }

  set password(value) {
    // this method will start a race between the constructor and setter
    // this.password = value.toUpperCase();
    // so we need to make a new property
    // this method will work but if a want to make the real password change i will do it like this
    this._password = value.toUpperCase();
    // this._password = value;
  }
}

const singh = new User("singh@gmail.com", "abc");
// now set the getter value

console.log(singh);
console.log(singh.password);
console.log(singh.email);
