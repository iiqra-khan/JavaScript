const coding = ["java", 'python', 'cpp']

// coding.forEach( function(item) {
//     console.log(`the items are: ${item}`);
    
// })

// coding.forEach( (item) => {
//     console.log("item: ", item);
    
// })

// function printItems(item){
//     console.log(item);
// }

// coding.forEach(printItems)
// coding.forEach(printItems())  () executes the function, we dont want to execute the function we need to just paas the reference


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : 'js'
    },
    {
        languageName : "python",
        languageFileName : 'py'
    },
    {
        languageName : "java",
        languageFileName : 'java'
    }
]


mycoding.forEach( (item) => {
    console.log(item.languageFileName);
})