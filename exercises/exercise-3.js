//Write a JavaScript program to get the current date.
var date = new Date();
var day = date.getDay();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log("Expected Output:");
console.log(month + "-" + day + "-" + year);
console.log(month + "/" + day + "/" + year);
console.log(day + "-" + month + "-" + year);
console.log(day + "/" + month + "/" + year);