// execution context
// how execution is done by JS
/*
    global execution context
    JavaScript is a single-threaded interpreted language. (single call stack and single memory heap)
    execution context is an environment 
    two types - global & function
    global EC - created when js is run and represents global scope
        variable this stores global EC
    function EC - whenever a function is called
    Eval EC - property of global ec

    twwo phases:
        creation phase - memory allocation (also called memory phase)
        execution phase - code is run line by line

        new variable environment - for every function

        call stack  - LIFO

*/


// if
// if( 2 === "2"){
//     console.log("executed")

// }
// else{
//     console.log("this is else");
    
// }
// === strict equal


// const score = 100
// if( score >= 100){
//     let power = 'fly'
//     console.log(`user power: ${power}`);
    
// }

// if (true) console.log("test");


// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
    
// }
// else if( balance < 700){
//     console.log("less than 700");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedin = true
const DebitCard = true
const loggedInFromGoogle = true
const loogedInFromEmail = true
if (userLoggedin && DebitCard){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loogedInFromEmail){
    console.log("user logged in");
    
}