function EmployeeVM() {
    var that = this;
    
    that.Employee = new Employee();

    that.reset = function () {
        that.Employee.FirstName("");
        that.Employee.LastName("");
        that.Employee.DateOfBirth("");
    };

    that.submit = function () {
        var json1 = ko.toJSON(that.Employee);
        $.ajax({
            url: '/Employee/SaveEmployee',
            type: 'POST',
            dataType: 'json',
            data: json1,
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                var message = data.Message;
            }
        });
    };
}; 

ko.applyBindings(new EmployeeVM());