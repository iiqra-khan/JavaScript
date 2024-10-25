// inheritance

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {  //method
        console.log(`Username is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);

    }
}

const chai = new Teacher("chia", "xyz", "123")

chai.addCourse()

const coffee = new User("coffee")
coffee.logMe()

//coffee.addCourse() // doesnt have excess

console.log(chai === coffee);  //gives false

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

