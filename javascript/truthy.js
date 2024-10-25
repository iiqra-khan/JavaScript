// const userEmail = "iqra@email"
const userEmail = "" // this is false
const arr = []

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("dont have user email");
    
// }


// falsy values
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy false
    // "0", "false", " ", [], {}, function(){}

// if (arr.length === 0){
//     console.log("array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }

// false == 0 , false == "", 0 == '' all are true


// nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1); // assigns 10

val1 = undefined ?? 15
console.log(val1);


//ternary operator

const iceTea = 100
iceTea <= 120 ? console.log("less") : console.log("more");


