// const starmakerUser = new Object(). //THIS IS SINGLE TERM OBJECT
const starmakerUser = {} // SAME OUTPUT BUT NOT A SINGLE TERM OBJECT

starmakerUser.id = "1234abcd"
starmakerUser.name = "shreya"
starmakerUser.isLoggedIn = false

// console.log(starmakerUser);

const regularUser = {
    email: "shreya@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shreya",
            lastname: "jha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spreading the above code
// console.log(obj3);

// HOW WE ARE GETTING VALUES FROM DATABASe

const user = [
    {
        id: 1,
        email: "jfvcefh@gmail.com"
    },
    {

    },
    {

    }
]

user[1].email
// console.log((starmakerUser));

// console.log(Object.keys(starmakerUser));
// console.log(Object.values(starmakerUser));
// console.log(Object.entries(starmakerUser));

// console.log(starmakerUser.hasOwnProperty('isLoggedIn'));
 //CHECKS IS THAT PROPERTY(isLoggedIn) is present or not

const course = {
    courseName: "pagalpanti",
    price: "7777",
    courseInstructor: "pagal"
}

// course.courseInstructor

const {courseInstructor: instructor} = course 
// DE-STRUCTURING the object of courseInstructor to instructor to use only instructor in place of courseInstructor

// console.log(courseInstructor);
console.log(instructor); //both line 67 & 68 gives same output


// ************* JSON **************

// {
//     "name": "harsh",
//     "id": "676767",
//     "money": "00"
// }

// JSON CAN BE ALSO IN FORM OF ARRAY 
[
    {
    },
    {},
    {}
]









