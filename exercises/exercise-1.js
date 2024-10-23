//Write a JavaScript program to display the current day and time in the following format.
let date = new Date();
let day = date.toLocaleString('en-us', {weekday: 'long'});
console.log("Simple Output: Today is: " + day);
var ampm = (date.getHours() >= 12) ? "PM" : "AM";
var hour = (date.getHours() >= 12) ? date.getHours() - 12 : date.getHours();
console.log("Current time is: " + hour + " " + ampm + " : " + date.getMinutes() + " : " + date.getSeconds());