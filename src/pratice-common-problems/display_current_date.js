// Write a program to get the current date. 
// Output: 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function displayDate() {
    var today = new Date();    
    var currentDate = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    var currentMonth = (today.getMonth() + 1) < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;

    var currentDate = currentDate + "-" + currentMonth + "-" + today.getFullYear();

    console.log(currentDate);
}


displayDate()
