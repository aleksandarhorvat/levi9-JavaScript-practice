//Write a JavaScript program to check two given integers whether one is positive and another one is negative.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
if(checkNumbers(x,y))
    console.log("It's true");
else
    console.log("It's false");

function checkNumbers(x,y){
    if((x >= 0 && y < 0) || (y >= 0 && x < 0))
        return true;
    else
        return false;
}