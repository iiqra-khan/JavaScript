// const coding = ["java", 'python', 'cpp']

// const val = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values); //does not return anything thus print undefined ... even if we use return 
// forEach does not return a value

// coding.forEach( (item) => {
//     console.log(item);   
// })

const myNum = [1, 2, 3, 4, 5]

//const newNums = myNum.filter( (num) => num > 4) // returns value

//{} means scope thus with arrow function we have to use the return keyword with parenthese it returns implicitly
// const newNum = myNum.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);
// console.log(newNum);

// const newNums = []

// myNum.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {
        title : 'Book1', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title : 'Book2', genre: 'Non Fiction', publish: 1989, edition: 2010
    },
    {
        title : 'Book3', genre: 'Fiction', publish: 1981, edition: 1999
    },
    {
        title : 'Book4', genre: 'Non Fiction', publish: 1981, edition: 1980
    },
]

// const userBooks = books.filter( (bk) => bk.genre==='Fiction')
// const userBooks = books.filter( (bk) => { return bk.edition > 2000})
const userBooks = books.filter( (bk) => { return bk.edition > 2000 && bk.genre == "Fiction"})
console.log(userBooks);
