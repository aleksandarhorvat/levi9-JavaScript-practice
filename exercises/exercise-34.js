//Write a JavaScript program to find the largest number from the two given positive integers.
//The two numbers are in the range 40..60 inclusive.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));

var result = checkIntegers(x,y);
if(result != null)
    console.log("Largest number is: " + result);

function checkIntegers(x,y){
    if((x >= 40 && x <= 60) && (y >= 40 && y <= 60))
        return findLargest(x,y);
    else
        return null;
}

function findLargest(x,y){
    var largest = x;
    if(y > largest)
        largest = y;
    return largest;
}