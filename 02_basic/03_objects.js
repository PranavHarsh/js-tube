//. literal and singleton (we can declare by two types)


// object.create


// OBJECT LITERALS

const mySym = Symbol("key1")

const JsUser = {
    name: "harsh",
    "full name": "RomeoHarsh",
    [mySym]: "myKey1",
    age: 22,
    location: "Banglore",
    email: "harsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "romeo@chat.com"
// Object.freeze(JsUser) // it will freeze the object
JsUser.email = "harshbarff@gmail.com" // we will not get this value because above we freeze it
console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello guys");  
}
JsUser.greetingTwo = function() {
    console.log(`hello guys, ${this.name}`);  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


