//Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back
const prompt = require("prompt-sync")();
var userInput = prompt("Enter the string: ");
userInput = addFirstChar(userInput);
console.log("Changed string: " + userInput);


function addFirstChar(string){
    var firstChar = string.charAt(0);
    return firstChar + string + firstChar;
}