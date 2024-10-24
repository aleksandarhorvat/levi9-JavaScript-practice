//Write a JavaScript program to find the largest of three given integers.  
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
var z = parseInt(prompt("Enter 3rd number: "));
var result = checkIntegers(x,y,z);
console.log("Largest of three integers is: " + result);

function checkIntegers(x,y,z){
    var largest = x;
    if(y > largest)
        largest = y;
    if(z > largest)
        largest = z;
    return largest;
}