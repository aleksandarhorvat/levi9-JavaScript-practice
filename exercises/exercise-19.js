//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter the number: "));
if(checkNumber(x))
    console.log("It's true");
else
    console.log("It's false");

function checkNumber(x){
    return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20 ?  true : false;
}