// forEach loops in arrays

const myArray = ["js", "ruby", "java"];

myArray.forEach(function greet(val) {
  //   console.log(val);
});

myArray.forEach((val) => {
  //   console.log(val);
});

//interesting fact

function printMe(item) {
  //   console.log(item);
}

myArray.forEach(printMe);

//
myArray.forEach((item, index, array) => {
  //   console.log(item, index, array);
});

// accessing of object in array format with forEach
const mycoding = [
  {
    languageName: "javscript",
    languageFileName: "js",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

mycoding.forEach((item, index, array) => {
  console.log(item.languageName);
});
