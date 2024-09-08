const user = {
    username: "romeo",
    price: 99900,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "prachi"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = " romeo"
//     console.log(this.username);
// }

// chai()

// const coffee = function () {
//     let username = " romeo"
//     console.log(this.username);
// }

const coffee =  () => {
    let username = "romeo"
    console.log(this);
}


// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "romeo"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()