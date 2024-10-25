const newHero = ["hulk", 'spiderman']
// js --- prototypal behaviour

function mult(num){
    return num * 5
}

mult.power = 2

console.log(mult(3));
console.log(mult.power);
console.log(mult.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(`price is : ${this.score}`);
    
}
// now create user will not know if to screen chai or tea
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

tea.printme()
chai.printme()
