//Write a JavaScript program to create a string from a given string.
//This is done by taking the last 3 characters and adding them at both the front and back.
//The string length must be 3 or more.
const prompt = require("prompt-sync")();
var userInput;
do{
    userInput = prompt("Enter the string: ");
}while(userInput.length < 3);
userInput = addLastThree(userInput);
console.log("Changed string: " + userInput);

function addLastThree(string){
    var lastThree = string.substring(string.length - 3, string.length);
    return lastThree + string + lastThree;
}