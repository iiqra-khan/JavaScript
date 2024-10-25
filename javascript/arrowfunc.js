const user = {
    username : "iqra",
    price : 999, 
    
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
    }

}

user.welcomeMessage()
user.username = 'sarah'
user.welcomeMessage()

//  in the browser the most global object is window through which we can access 


// function coffee(){
//     let username = "iqra"
//     // console.log(this.username) this is undefined
// }


// const chai = () => {  // arrow function
//     let username = "iqra"
//     console.log(this.username); // also undefined
    
// }

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2
// if curly braces then return keyword is to be used for () return can be omitted
// const addTwo = (num1, num2) => (num1 + num2) 


// With arrow functions the this keyword always represents the object that defined the arrow function
// to return obj {} are must
const addTwo = (num1, num2) => ({username: "iqra"}) 

console.log(addTwo(3, 4));

