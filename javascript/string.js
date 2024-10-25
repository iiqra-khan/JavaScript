// string interpolation
const name = "iqra"
const repoCount = 50
console.log(`name is ${name} and repo count is ${repoCount}`)

const gameName = new String("iqra..")

console.log(gameName.__proto__) 
// obj type
// charAt
// indexof

const newString = gameName.substring(0,2)
console.log(newString)


// cannot give negative index it ignores and start from one
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "    iqra   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:// ..."

url.replace("%20, -")
url.includes("iqra") //true false values

// splitting

console.log(gameName.split('-'))
