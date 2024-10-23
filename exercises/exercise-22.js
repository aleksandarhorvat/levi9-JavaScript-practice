//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
const prompt = require("prompt-sync")();
var x = prompt("Enter the string: ");
var pos = parseInt(prompt("Enter the position: "));

console.log(removeChar(x, pos));

function removeChar(x, pos){
    return x.slice(0, pos) + x.slice(pos + 1);
}