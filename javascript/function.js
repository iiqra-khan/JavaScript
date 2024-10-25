function sayMyName(){
    console.log("i");
    console.log("q");
    console.log("r");
    console.log("a");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result

    return number1+number2
    
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")  //gives 34

const result = addTwoNumbers(4, 5)


function loginUserMessage(username = 'sam'){ // this is a default value now if will never execute
    if(username === undefined){  // if (!username) is same as the prev if
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage('Iqra'))

function calcualteCartPrice(val1, val2, ...num1){ //rest operator {...}
    return num1

}

//console.log(calcualteCartPrice(200, 200, 400)); //returns an array of values becoz of rest {... operator}

//console.log(calcualteCartPrice(200, 200, 400, 6000, 600)); // this func call will print [400, 6000, 600] as val1 and val 2 takes the 200 and 200 val

const user = {
    username: "iqra",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) this is passing objects directly

handleObject({
    username: "sam", 
    price: 399
})

// we can also pass arrays
const newArray = [200, 500, 45, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 700])); //works same as before
