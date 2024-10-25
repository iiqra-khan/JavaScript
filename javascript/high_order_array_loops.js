// for of

// const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "hello world!"
// for (const i of greetings) {
//     console.log(`each char is ${i}`);
    
// }

// map - remembers orders unlike objects

const map = new Map()
map.set("IN", "India")
map.set("fr", "France")

// console.log(map);

// for (const key of map) {
//     console.log(key); //prints whole array
    
    
// }

for (const [key, value] of map) {
    // console.log(key);
}

const obj = {
    'val1' : 1,
    'val2' : 2
}
// ---- THIS IS NOT USED TO ITERATE OVER OBJECTS
// for (const key of obj) {
//  console.log(key);
// }