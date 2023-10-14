const User = {
  _email: "sigh@gmail.com",
  _password: 123,

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};
// /factory funcitons
const tea = Object.create(User);
console.log(tea.email);
