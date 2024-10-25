
function SetUserName(userName){
    // db calls
    // more calls
    this.userName = userName

}

function createUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createUser('chai', "chai@xyz", "123")
console.log(chai);
