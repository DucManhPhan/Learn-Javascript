// Write a program to determine whether a given year is a leap year in the 
// Gregorian calendar. 

function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false; 
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false; 
    }
}


if (isLeapYear(2000) == true) {
    console.log("It is a leap year.\n");
}
else 
{
    console.log("It is not leap year.\n");
}