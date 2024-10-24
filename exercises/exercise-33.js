//Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));

checkIntegers(x,y);

function checkIntegers(x,y){
    if(((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) || ((x >= 70 && x <= 100) && (y >= 70 && y <= 100)))
        console.log("Given integers values are in the range 40..60 or 70..100");
    else
        console.log("Given integers values aren't in the range 40..60 or 70..100");
}