const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    rating: 8.8 },
];


const twoThousandMovies = movies.find((element) => element.year > 2000)
console.log("first movie on 2000", twoThousandMovies );
console.log("-----------------------------------");

const nighRating = movies.find((element) => element.rating > 9)
console.log("first movie rating grater than 9", nighRating );
console.log("-----------------------------------");

const directorChristopher  = movies.filter((element) => element.director == "Christopher Nolan")
console.log("All movies to Christopher Nolan", directorChristopher );
console.log("-----------------------------------");

const before2010 = movies.filter((element) => element.year < 2010)
console.log("All movies before 2010", before2010 );
console.log("-----------------------------------");

const moviesList = movies.map((element) => element.title)
console.log("movies List ", moviesList );
console.log("-----------------------------------");



const ratingList = movies.map((element) => element.rating )
console.log(" to get list of rating", ratingList );
console.log("-----------------------------------");
const average = ratingList.reduce(function(sum, rating){
    return (sum + rating)/ movies.length ;
});
console.log(" to get average of rating", average );
console.log("-----------------------------------");

const sortByYear = movies.sort((a ,b) => a.year - b.year)
console.log(" to sort by year (new to old)", sortByYear );
console.log("-----------------------------------");

const sortByRating = movies.sort((a, b) => a.rating - b.rating).reverse()
console.log(" to sort by rating (high to low)", sortByRating );
console.log("-----------------------------------");

const allMovise8 = movies.every((element) => element.rating > 8)
console.log("all rate movis is 8", allMovise8 );
console.log("-----------------------------------");

const oneAtlest = movies.some((element) => element.year == 1999)
console.log("amovis year is 1999", oneAtlest );
console.log("-----------------------------------");

const sameDirector = movies.every((element) => element.director == "David Fincher")
console.log("all movis same director", sameDirector );
console.log("-----------------------------------");

const oneMovie8AndHalf = movies.some((element) => element.rating < 8.5)
console.log("one movie  at least that rate  is 8.5", oneMovie8AndHalf );
console.log("-----------------------------------");