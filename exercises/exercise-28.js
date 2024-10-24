//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
//Return true if either of them falls within the range.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));

checkIntegers(x,y);

function checkIntegers(x,y){
    if((x >= 50 && x <= 99) && (y >= 50 && y <= 99))
        console.log("Given integers values are in the range 50..99");
    else
        console.log("Given integers values aren't in the range 50..99");
}