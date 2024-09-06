const accountId = 560064
let accountEmail = "pranavharsh@gmail.com"
var accountPassword = "12345"
accountCity = "Banglore"
let accountState;


// accountId=2. //Not allowed

accountEmail = 'hah@.com'
accountPassword='2321223'
accountCity='saharsa'

console.log(accountId);

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity, accountState])
