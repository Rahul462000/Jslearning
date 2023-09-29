// their are mainly three types of variables that we use
// 1. var
var cityName = "ghaziabad";
var accountEmail = "singh@gmail.com";
// 2.const
const accountId = 1443223;
// 3.let
let accountPassword = "12345Awd";
let accountName = "singh";

employId = 23456;
let accountState;
// js print undefined if no value is present in the variable

console.log(cityName + " | " + accountId + " | " + accountPassword);
// we can change the value only for let and var not for const
// as const is a constant valur variable or one timr use only

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// below will give typeError as it is a constant
// accountId = 2; not allowed
cityName = "delhi";
accountPassword = "asdfghj";
accountName = "singh1";
accountEmail = "singh1@gmail.com";
employId = 454545;

// console.table([]) will give you data in table format
console.table([
  employId,
  cityName,
  accountPassword,
  accountName,
  accountEmail,
  accountState,
]);
