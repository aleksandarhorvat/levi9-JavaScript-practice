//Write a JavaScript exercise to get the filename extension.
const prompt = require("prompt-sync")();
var userInput = prompt("Enter the file name: ");
var extension = userInput.split(".").pop();
console.log(extension);