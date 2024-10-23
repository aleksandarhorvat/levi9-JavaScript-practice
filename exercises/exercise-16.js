//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter 1st number: "));
var y = parseInt(prompt("Enter 2nd number: "));
if(x == y)
    console.log(3 * (x + y));
else
    console.log(x + y);