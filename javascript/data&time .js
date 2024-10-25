
let mydate = new Date() // this is an obj
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
console.log(mydate.toLocaleString());

let mycreateddate = new Date(2023, 0 , 23);
console.log(mycreateddate);

let myTimeStamp = Date.now()

// both these values give time in ms from the epoch we can compare them
console.log(myTimeStamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1); // try other methods of date with dot op month start from 0 in js

newDate.toLocaleString('default', {weekday: 'long'})