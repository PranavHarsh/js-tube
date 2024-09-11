class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}romeo`
    }

    set password(value){
        this._password = value
    }
}

const romeo = new User("ro@meooo.ai", "abc")
console.log(romeo.email);