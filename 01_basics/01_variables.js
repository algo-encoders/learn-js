const accountId = 1444553;
let accountEmail = "test@test.com";
var accountPassword = "12345";
accountCity = "Lahore";
let accountState;

// accountId = 2; not allowed

accountEmail = "h2@test.com";
accountPassword = "2232323";
accountCity = "Karachi";


/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);




