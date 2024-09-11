// let myName = "harsh     "
// let mychannel = "mad     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Harsh = function(){
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyHarsh = function(){
    console.log(`Harsh says hello`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.heyromeo()
// heroPower.heyRomeo()

// inheritance

const User = {
    name: "lover",
    email: "romeoo@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "RomeoaurLover     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"harsh".trueLength()
"iceCoffee".trueLength()