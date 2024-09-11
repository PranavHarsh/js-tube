class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Lover extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const romeo = new loverRomeo("harsh", "harsh@theloverevery.com", "123")

romeo.logMe()
const loverRomeo = new User("lovernewRomeo")

loverRomeo.logMe()

console.log(romeo instanceof User);