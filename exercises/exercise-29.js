//Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
//Return true if one or more of them are in the specified range.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
var z = parseInt(prompt("Enter 3rd number: "));
checkIntegers(x,y,z);

function checkIntegers(x,y,z){
    if((x >= 50 && x <= 99) && (y >= 50 && y <= 99) && (z >= 50 && z <= 99))
        console.log("OGiven integers values are in the range 50..99");
    else
        console.log("Given integers values aren't in the range 50..99");
}