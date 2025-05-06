let book = {
  title: "JavaScript",
  author: "Tuwaiq Academy",
  year: 2025,
  isAvailable: true,
  borrow(isAvailable) {
    isAvailable = false;
    // console.log("this book borrows before ");
    return (this.isAvailable = !this.isAvailable);
  },
};
let publisher = {
  name: "Author name",

  location: {
    country: "KSA",
    city: "RIH",
  },
};
//! print book
console.log("print book");
let bookObj = book;
console.log(bookObj);

//! print title from book
console.log("print title from book object");
console.log(bookObj);
let bookTitle = book.title;
console.log(bookTitle);

//! change year value and print it after update
console.log("change year value and print it after update ");
let bookYear = book.year;
book.year = 2023;

//! to delete author and print book
console.log("to delete author and print book ");
delete book.author;
console.log(bookObj);

//! call borrow function and change isAvailable = false
console.log("call borrow function and change isAvailable = false");
// book.isAvailable = false
let bookFun = book.borrow(false);
console.log(bookFun);
console.log(bookObj);

//! print publisher info
console.log("print publisher info: ");
let publish = publisher;
console.log(publish);

//! print publish city
console.log(" publish city: ");
let publishedCity = publisher.location.city;
console.log(publishedCity);

console.log("================= Lab 2 ======================");

const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

const bigMass = characters.find((element) => element.mass > 75);
console.log("his mass more than 75", bigMass);

const eyeColor = characters.find((element) => element.height < 180);
console.log("eye color is ", eyeColor.eye_color);

const hight = characters.find(
  (element) => element.height > 150 && element.height < 210
);
console.log("height is greater than 150 but less than 210 ", hight);

const femaleCh = characters.filter((element) => element.gender == "female");
console.log("all female characters.", femaleCh);

const eyesColor = characters.map((element) => element.eye_color);
console.log("kind of color eyes.", eyesColor);

const arrMass = characters.map((element) => element.mass);
console.log("tis array to mass.", arrMass);

const sortName = characters.sort((a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);
console.log("Sort by name alphabetically (A to Z).", sortName);

const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log("Sort by height (low to high).", sortHeight);

const greaterHundred = characters.every((element) => element.height > 100);
console.log("Does every character have a height greater than 100?", greaterHundred);

const greaterTwoHundred = characters.every((element) => element.height > 200);
console.log(" Is every character lighter than 200??", greaterTwoHundred);

const blackEyes = characters.some((element) => element.eye_color == "black")
console.log("  Is there at least one character with black eyes??", blackEyes);

const exactlyHeight = characters.some((element) => element.height == 177)
console.log("Is there at least one character with a height of exactly 177?", exactlyHeight);
