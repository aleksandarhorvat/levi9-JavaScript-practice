//Write a JavaScript program that checks whether the last digit of three positive integers is the same.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
var z = parseInt(prompt("Enter 3rd number: "));
var result = checkIntegers(x,y,z);
if(result)
    console.log("last digit of three numbers are same");
else
    console.log("last digit of three numbers aren't same");    

function checkIntegers(x,y,z){
    return lastDigit(x) == lastDigit(y) == lastDigit(z);
}

function lastDigit(x){
    return x % 10;
}