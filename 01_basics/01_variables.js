const account_Id =  252525
let account_Email = "imavikasthakur001@gmail.com"
var account_Password = "12345"
accountCity = "Jaipur"
let account_State;
// account_Id = 2 // Not Allowed

account_Email = "vs@vs.com"
account_Password = "99158"
accountCity = "Mohali"

console.log(account_Id);

/*
Prefered not to use var becouse of issue in block scope and functional scope
*/

console.table([account_Email, account_Id, account_Password, accountCity, account_State])

