// javascript and class
// js is prototype-based language

// oop - programming paradigm - structure of writing code

// object - collection of properties and methods

// parts of oop
// object literal 
    // constructor function
    // prototype
    // classes
    // instances

// abstraction, encapsulation, inheritance, polymosrphism

const user = {
    username : "iqra", 
    loginCount: 8,
    signedIn : true,
    getUserDetails: function(){
        // console.log('Got user details');
        console.log(`username: ${this.username}`);
        // without this it wont print
        
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this); in browser print context of the browser

// constructor function new keyword -- new creates a new context

function users(username, loginCount, isLoggedIn){
    this.myusername = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = () => {
        return (console.log(`welcome`))};

    return this //-- without this also work as this is passed back implicitly
}

// const userOne = user('iqra', 12, true)
// const userTwo = user('khan', 11, true)
// console.log(userOne); //usertwo will overwrite value of userone and in userone usertwo details will be printed

const userOne = new users('iqra', 12, true)
const userTwo = new users('khan', 11, true)
console.log(userOne.greeting());
console.log(userTwo);



