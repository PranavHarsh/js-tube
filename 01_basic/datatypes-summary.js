//. PRIMITIVE

//. 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const score = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 537373576n


// Reference type (Non primitive)

//Array, Objects, Functions

const heros = ["ironman", "harsh", "shubham"] // reference type or non-primitive
let myObj = {
    name: "harsh",
    age: 22,
}

const myFunction = function() {
    console.log("hello world");
}

// console.log(typeOf bigNumber);