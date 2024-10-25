const myNum = [1, 2, 3, 4, 5]

// const newNums = myNum.map( (num) => num + 10)
// console.log(newNums);

// myNum.forEach( (num) => console.log(num + 10))

// ---------CHAINING-------

// the first map will execute first and the result will be passed to the next map and so on 
const newNums = myNum
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num > 40)
console.log(newNums);
