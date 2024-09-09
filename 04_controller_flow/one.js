// if

const isUserLoggedIn = true

if (isUserLoggedIn) {
 console.log(isUserLoggedIn);
 
} else {
console.log();
}

// <, >,

// == :-- equal
// != isequal output will be in true or false format
// === :  also checks the type,

// if (balance > 900) console.log("test"),console.log("test2"); //dont use like this

// if (balance < 900) {
//     console.log("less than 900");
// } else if (balance < 1250) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 1250");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || use for multiple conditions
    console.log("User logged in");
}
