// two ways to declare obj
// singleton(that is made with constructor) and literals
// Object.create() singleton

const mySym = Symbol("key1")

const jsUSer = {
    name : "iqra",
    age : 22,
    location : "delhi",
    email : "iqra@gmail",
    isLoggedIn : false,
    lastLoginDays: ["mon", "wed"],
    [mySym] : "mykey1" //ACCESSING SYMBOLS
}
console.log(jsUSer.email);
// console.log(jsUSer[email]);
console.log(jsUSer[mySym]); //USING SYMBOL
jsUSer.email = "khan@gmail"
// Object.freeze(jsUSer)
jsUSer.email = "khan@microsoft"
console.log(jsUSer);


jsUSer.greeting = function(){
    console.log("Hello JS User")
}
jsUSer.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUSer.greeting()); //gives a not  a function error becoz user is freezed

//-----------------------------------------------------

const instaUser = new Object()

instaUser.id = "1234qs"
instaUser.name = 'iqra'
instaUser.isLoggedIn  = false

const regularUser = {
    email: "iqra@gmail.com",
    fullname: {
        userFullName: {
            firstName: "iqra",
            lastName: "khan"
        }
    }
}
console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "a"}
const obj2 = {3: "b", 4: "c"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)  //copies to target and return {} is target thus good to write curly braces

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// FROM DB THE VALUES WILL COME AS ARRAY OF OBJECTS
const user = [
    {
            id: 1, 
            email: "iq@gmail.com"
    }, 
    {
            id: 1, 
            email: "iq@gmail.com"
    }
]
// user[1].email
console.log(instaUser);
console.log(Object.keys(instaUser));  // returs array of keys we can loop thru it 
console.log(Object.values(instaUser));  // returs array of values we can loop thru it 
console.log(Object.entries(instaUser));  // returs array of key/value pair we can loop thru it 

console.log(instaUser.hasOwnProperty("id"));

const course = {
    coursename : "ml with python",
    price: "999",
    courseInstructor: "XYZ",
}

// course.courseInstructor

const {courseInstructor: instructor} = course // this is known as destructing object
console.log(instructor);  

const navabr = ({company}) => {  //the company inside bracket is destructring

}

navabr(company = "iqra")


// json syntax
// {
//     "name" : "iqra", 
//     "courseName" : "ml with ds",
//     "price": "free" 
// }

