//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
const prompt = require("prompt-sync")();

var c = prompt("Enter the temperature in degree celsius: ");
c = parseInt(c);
var f = (9 * c) / 5 + 32;
console.log("Temperature is fahrenheit: " + f + " °F");

f = prompt("Enter the temperature in degree fahrenheit: ");
f = parseInt(f);
c = (5*f - 160)/9;
console.log("Temperature is celsius: " + c + " °C");