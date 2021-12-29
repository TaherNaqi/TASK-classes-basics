/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 * after you are done with the class, create at least 3 objects of type Actor of your favorite actors
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
    this.interests = [];
  }
  printName = () => {
    console.log(
      `First name is ${this.firstName} and last name is ${this.lastName}`
    );
  };
  calculateAge = (currentYear) => currentYear - this.birthYear;
  addInterest = (newInterest) => {
    this.interests.push(newInterest);
    return this.interests;
  };
}
const Taher = new Person("Taher", "Naqi", "male", "1994", ["plaay"]);
Taher.printName();
console.log(Taher.calculateAge(2021));
console.log(Taher.addInterest("Playing Games"));

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre, rating = []) {
    this.title = title;
    this.duration = duration;
    this.gender = genre;
    this.rating = rating;
  }
  rate = (rating) => {
    if (rating > 0 && rating <= 10) this.rating.push(rating);
    else console.log("Rating is invalid");
  };
  averageRating = () => {
    const Average = this.rating.reduce((prev, curr) => prev + curr);
    return Average / this.rating.length;
    // this.rating.forEach((rate) => (Average += rate));
    // return Average / this.rating.length;
    // for (let i = 0; i < this.rating.length; i++) {
    //   Average = this.rating[i] + Average;
    // }
  };
}

const spiderman = new Movie("Spiderman", 40, "action");
spiderman.rate(10);
spiderman.rate(10);
spiderman.rate(-1);
console.log(spiderman.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];

  addMovie = (movie) => this.movies.push(movie);
}
const johnyDep = new Actor("jhony", "Dep", "male", 1968);

// johnyDep.addMovie("added movie");
// johnyDep.addMovie("2nd movies");
// console.log(johnyDep.movies);
