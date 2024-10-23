//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
var year = 2014;
while(year <= 2050){
    let date = new Date(year, 0, 1);
    let day = date.toLocaleString('en-us', {weekday: 'long'});
    if(day == "Sunday")
        console.log("In year " + year + " it's Sunday on January 1st");
    year++;
}