const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  // console.log(item);
});

// console.log(values);

// filter method id used because forEach method didn't return anything
const myNums = [1, 2, 3, 4, 5, 6, 7];

const newNums = myNums.filter((num) => {
  return num > 5;
});
// console.log(newNums);

//
const books = [
  { title: "Book one", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "Non fiction", publish: 1982, edition: 2004 },
  { title: "Book three", genre: "history", publish: 2010, edition: 2004 },
  { title: "Book four", genre: "science", publish: 2005, edition: 2004 },
  { title: "Book five", genre: "history", publish: 1985, edition: 2004 },
  { title: "Book six", genre: "grammer", publish: 1986, edition: 2004 },
  { title: "Book seven", genre: "science", publish: 2022, edition: 2004 },
];

let userbooks = books.filter((bk) => bk.genre === "science");

userbooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "science";
});

console.log(userbooks);
