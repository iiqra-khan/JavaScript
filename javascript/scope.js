if (true) {
    let a = 10
    var c = 20
    const b = 30

}

// console.log(a) this will not work
// console.log(b) this will not work
console.log(c)  // this works as c is declared as var but shouldnt be accessible outside of the scope

function one(){
    const username = "iqra"
    console.log(username)

    function two(){
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website) this is out of the scope 

    two()
}

one()



addone(5)  // calling function before declaration will work in this way
function addone(num){
    return num + 1

}


// addTwo(5) calling function here will raise an error of accessing before initialising
const addTwo = function(num){  // this is also called a variable
    return num + 2
}

addTwo(5)  // correct way to call