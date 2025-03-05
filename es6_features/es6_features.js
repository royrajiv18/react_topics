//****************************************** let and const**********************************************
// block-scoped
let myname = "Clifford";
myname = "Isaiah";
console.log(myname); // Output: Isaiah

const age = 25;
age = 30; // TypeError: Assignment to constant variable.

// Example 1: Arrow function with one parameter
const myFunction = (name) => {
  console.log(`Hello, ${name}!`);
};

myFunction("Alice"); // Output: "Hello, Alice!"

// Example 2: Arrow function for addition
const add = (a, b) => {
  return a + b;
};

add(4, 2); // Output: 6

// Example 3: Shorter syntax for single-statement arrow function
const multiply = (a, b) => a * b;

multiply(3, 5); // Output: 15

// Example 4: Arrow function with no parameters
const sayHello = () => {
  console.log("Hello!");
};

sayHello(); // Output: "Hello!"

//****************************************** Template literals**********************************************

// Example 1: Creating a multiline string with variables
const name = "Bob";
const age = 42;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: "Hello, my name is Bob and I am 42 years old."

// Example 2: Template literals vs. string concatenation (ES5)
var name = "Clifford";
var age = 25;
var message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message); // Output: "Hello, my name is Clifford and I am 25 years old."

// Example 3: Template literals with expressions
const a = 10;
const b = 5;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: "The sum of 10 and 5 is 15."

//****************************************** Destructuring**********************************************
// Destructuring is a powerful feature introduced in ES6 that allows you to extract values from arrays or properties from objects and assign them to variables.
// It provides a concise and convenient way to access specific values without the need for lengthy code.

// Destructuring Arrays -
const names = ["Alice", "Bob", "Charlie", "Dave"];
const [name1, name2, name3, name4] = names;

console.log(name1); // Output: "Alice"

// Destructuring Objects -
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

const { name, age, address } = person;

console.log(name); // Output: "Alice"
console.log(age); // Output: 25
console.log(address); // Output: {city: "New York", state: "NY"}

// Destructuring nested objects -
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    state: "NY",
  },
};

const {
  name,
  age,
  address: { city, state },
} = person;

console.log(name); // Output: "Alice"
console.log(age); // Output: 25
console.log(city); // Output: "New York"
console.log(state); // Output: "NY"

//****************************************** Rest and Spread Operators***********************
// Rest Operator -
//The rest operator is denoted by three dots (...) followed by a parameter name.
// It allows you to represent an indefinite number of arguments as an array. Here's an example:
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Spread Operator
// The spread operator is also denoted by three dots (...), but it is used in a different context.
// It allows you to expand an array into its individual elements. Here's an example:
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers); // Output: 1 2 3 4 5

//****************************************** Classes***********************
// class Person
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// object person
const person = new Person("Alice");

person.greet(); // Output: "Hello, my name is Alice!"

//****************************************** Modules***********************
// Export a module
export const name = "Alice";

// Export a default module
export default function add(a, b) {
  return a + b;
}

// Import a module
import { name } from "./module.js";

console.log(name); // Output: "Alice"

// Import a default module
import add from "./module.js";

console.log(add(1, 2)); // Output: 3

//****************************************** Promises***********************
// creating a promise
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  if (number % 2 === 0) {
    resolve(number); // Resolve the promise with the even number
  } else {
    reject(number); // Reject the promise with the odd number
  }
});

// consuming a promise

promise
  .then((number) => {
    console.log(`Success: ${number} is even.`);
  })
  .catch((number) => {
    console.log(`Error: ${number} is odd.`);
  });

//****************************************** Generators***********************
//  Generators are functions that can be paused and resumed, maintaining their context and variable bindings across re-entrances.
// They provide an elegant way to define iterators with a clear separation of iteration logic.

// Defining a Generator
function* idMaker() {
  let index = 0;

  while (index < 3) {
    yield index++;
  }
}

// Creating an Iterator from a Generator:
const iterator = idMaker();

console.log(iterator.next().value); // Output: 0
console.log(iterator.next().value); // Output: 1

//****************************************** Map***********************
//A Map is a collection of key-value pairs, similar to an Object. However,
// Map allows keys of any type, providing more flexibility compared to Objects.
// Create a map
const map = new Map();

// Add key-value pairs to the map
map.set("name", "Alice");
map.set("age", 25);

// Retrieve values from the map
console.log(map.get("name")); // Output: "Alice"

//****************************************** Set***********************
//A Set is a collection of unique values, where each value can occur only once.
// It is similar to an Array, but with the distinction that Set does not allow duplicate values.
// Create a set
const mySet = new Set();

// Add values to the set
mySet.add("name");
mySet.add("age");

// Check if a value exists in the set
console.log(set.has("name")); // Output: true

// converting set to array -
const myArray = Array.from(mySet);

//****************************************** For/Of loop***********************
//The for/of loop allows you to iterate over iterable objects like arrays, strings, Maps, and Sets
//but in a short syntax as compared to other loops.

// in array
const a = ["apple", "banana", "cherry"];
for (const fruit of a) {
  console.log(fruit);
}
/*apple
banana
cherry
*/

// - in string
const s = "hello";
for (const char of s) {
  console.log(char);
}
/*
h
e
l
l
o
*/

//****************************************** Object literal***********************
//Object literal enhancement is used to group variables from the global scope and form them into javascript objects.
// It is the process of restructuring or putting back together.

// variable declaration
var name = "Duke";
var color = "Brown";
var age = 5;

// Using Object Literal Enhancement
// Combines all variables into a dog object
var dog = { name, color, age };
console.log(dog);

/*
{
    name:"Duke",
    color:"Brown",
    age:5
}
*/
// TODO - some more types of examples are there
