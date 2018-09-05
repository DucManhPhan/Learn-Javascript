// Write a program to display the current day and time in the following format. 
// Output: Today is: Tuesday
//         Current time is 10 PM : 30 : 38


var Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayDayTime() {
    var currentDate = new Date();

    // get day.
    var currentDay = Week[currentDate.getDay()];        

    // get Time. 
    var currentTime = "";

    if (currentDate.getHours() < 12) {
        currentTime = currentDate.getHours() + " AM : " + currentDate.getMinutes() + " : " + currentDate.getSeconds(); 
    }    
    else {
        currentTime = (currentDate.getHours() - 12) + " PM : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
    }

    console.log("Today is: " + currentDay);
    console.log("Current time is: " + currentTime);
}

displayDayTime()