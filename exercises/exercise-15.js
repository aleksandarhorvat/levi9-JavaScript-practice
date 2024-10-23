////Write a JavaScript program to get the difference between a given number and 13,
//if the number is broader than 13 return double the absolute difference
const prompt = require("prompt-sync")();
var num = prompt("Enter the number: ");
if(Math.abs(num) > 13)
    console.log((Math.abs(num) - 13)*2);
else
    console.log(num - 13);