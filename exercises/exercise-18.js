//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
if(checkNumbers(x,y))
    console.log("It's true");
else
    console.log("It's false");

function checkNumbers(x,y){
    if(x == 50 || y == 50 || x + y == 50)
        return true;
    else
        return false;
}