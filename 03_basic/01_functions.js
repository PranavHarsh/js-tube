
function  sayMyName() {
console.log("h");
console.log("a");
console.log("r");
console.log("s");
console.log("h");
}

// GIVING REFERENCE or CALLINBG THE FUNCTION
// sayMyName()

// function  addTwoNumbers(number1, number2) {  //number1, number2 are parameters
//     console.log(number1 + number2);
// }

function  addTwoNumbers(number1, number2) { 

    //  let result = number1 + number2
    //  return result
    return number1 + number2
}
    

// addTwoNumbers(8, "7") // 87
// addTwoNumbers(7, null) // null is arguments
// addTwoNumbers(5, 6) //11
const result = addTwoNumbers(5, 6) 
// console.log(number1 + number2);

// console.log("Result: ", result);


function loginUserMessage(username) {
    if (!username) {      // username === undefined equal or same !username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("harshhh"))
// 

// LIKING SHOPPING APP USERCART

function  calculateCartPrice(...num1) {
    return num1
    
}
// console.log(calculateCartPrice(200, 600, 8000));

const user = {
    username: "harshh",
    price: 299
}

function  handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "prachi",
    price: 9999
})

const myNewArray = [200, 700, 900, 8000]

function  returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,900,76283])); //500








