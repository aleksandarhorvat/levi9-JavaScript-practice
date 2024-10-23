//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
var date = new Date();
var year = date.getFullYear();
var isLeap = year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
if(isLeap)
    console.log(year + " is leap year");
else
    console.log(year + " is not leap year");