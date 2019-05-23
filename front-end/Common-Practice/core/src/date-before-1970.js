let year = 1900;
let month = 01;
let day = 01;

let d = new Date(year, month, day);
let miliseconds = d.getTime();
console.log(d.getTime());

let otherDate = new Date(-2206335600000);
console.log(otherDate)
// -2209014000000
// -2209014000000
-2209014000000