


// Determine year is leap or not
Date.isLeapYear = function(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

Date.getDaysInMonth = function(year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

Date.prototype.isLeapYear = function() {
    return Date.isLeapYear(this.getFullYear());
}

Date.prototype.getDaysInMonth = function() {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
}

Date.prototype.addMonths = function(value) {
    var date = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);

    var daysInMonth = this.getDaysInMonth();
    var value = Math.min(date, daysInMonth);
    this.setDate(value);

    return this;
}

Date.prototype.addDays = function(value) {
    this.setDate(this.getDate() + value);

    return this;
}

Date.prototype.getDate_yyyy_mm_dd = function() {
    var dd = this.getDate();
    var mm = this.getMonth() + 1;
    var yyyy = this.getFullYear();
    
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '/' + mm + '/' + dd;
}

// "01/01/2019"
// "01/31/2012"
// "01/31/2011"
var tmp = new Date("01/01/2019");
// var result = tmp.addMonths(1);
var result = tmp.addDays(89);

console.log(result.getDate_yyyy_mm_dd());
