//Write a JavaScript program to compute the absolute difference between a specified number and 19.
//Returns triple the absolute difference if the specified number is greater than 19.
const prompt = require("prompt-sync")();
var x = parseInt(prompt("Enter number: "));
var res = Math.abs(x - 19);
if(x > 19)
    console.log(res * 3);
else
    console.log(res);