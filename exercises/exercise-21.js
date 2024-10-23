//Write a JavaScript program to create another string by adding "Py" in front of a given string.
//If the given string begins with "Py" return the original string.
const prompt = require("prompt-sync")();
var x = prompt("Enter the string: ");
console.log(checkPy(x));

function checkPy(x){
    if(x.substring(0,2) == "Py")
        return x;
    else
        return "Py" + x;
}