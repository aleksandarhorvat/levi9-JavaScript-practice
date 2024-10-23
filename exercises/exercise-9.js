//Write a JavaScript program to calculate the days left before Christmas.
const moment = require("moment");

var currDate = new Date();
var christmasDate = new Date(currDate.getFullYear(), 11, 25);
var days = christmasDate  - currDate;
var diff = moment.duration(days);
console.log(parseInt(diff.asDays()) + " days left until Christmas");