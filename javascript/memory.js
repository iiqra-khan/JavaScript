// stack memory is used for primitive data type
// we get a copy
// heap is for non primitive - we get a reference

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

// we are getting refernce of the same obj from the heap

let userTwo = userOne

userTwo.email = "iqra@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// both gives the same output. usertwo also referenced the same area in the heap as userone. both values changed on changing one 
