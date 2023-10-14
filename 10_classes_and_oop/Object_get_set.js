const User = {
  _email: "sigh@gmail.com",
  _password: 123,

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    const chai = new User("cahi@gmail.com", 123);
    this._email = value;
  },
};
// /factory funcitons
const tea = Object.create(User);
console.log(tea.email);
