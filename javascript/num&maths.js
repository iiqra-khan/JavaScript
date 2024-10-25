const score = 400

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8;

console.log(otherNumber.toPrecision(3)); // value between 1 and 21

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

// MATHS

console.log(Math); //it is an obj in itself
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random()); //always give value between 0 and 1

console.log(Math.floor((Math.random()*10)) + 1); 

const min = 10
const max = 20

console.log(Math.floor(math.random() * (max - min + 1)) + min);
//give a random no
// then 1 for avoiding 0
// min for being in the range of max and min

