const myArray = [0, 1, 2, 3, 4]
// js array are resizable not associated meaning can not be accessed via strings as indexes
// js array copy op makes shallow copies: they share the same reference

const myHero = ["nm1", "nm2"]
const arr2 = new Array(0, 1, 2, 3, 4, 5, 6, 7)

arr2.push(6)
arr2.unshift(0) //insert at start 
arr2.shift()

arr2.includes(0)
arr2.indexOf(19) // gives -1

const newArr = arr2.join() //print array element separated by commas and type is string

// slice and splice


// console.log("A" , arr2);
const myn1 = arr2.slice(1, 3) // 3 not included
const myn2 = arr2.splice(1, 3)
// splice takes out the chuck passed as argument and trims the array leaving the other elements

 const marvelHeros = ["1", "@", "4"]
 const dcHeros = ["23", "$%"]

//  marvelHeros.push(dcHeros)
//  console.log(marvelHeros);

// newHeros = marvelHeros.concat(dcHeros)
// console.log(newHeros); //concat gives a new array


// SPREAD OPERATOR

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const nestedArray = [1, 2, 3, [1, 3, 5], [4, 6, [6, 7, 8]]]

// we can use flat method to un nest arrays and concatenat them one after the other

const unNestArray = nestedArray.flat(Infinity)
// console.log(unNestArray);


// console.log(Array.isArray("iqra"));
// console.log(Array.from("iqra"));

// {} is obj
console.log(Array.from({name: "iqra"})); //gives empty array bcoz cant differentiate if to make keys or value as array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of returns an array from values passed as argument






 

