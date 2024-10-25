const accountId = 144553
let accountEmail = "iqra@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;
// accountId = 2
/* var has a scope of a function block no matter how deeply it is nested
whereas 
let has a scope of a block only irrespective of the place such as a function etc*/

accountEmail = "xyz@gmail.com"
accountPassword = "123"
accountCity = "Moradabad"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])