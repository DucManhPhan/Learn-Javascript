'use strict'

// Use the feature in ES5. 
function Person(name) {
    this._name = name;
}

Person.prototype.describe = () => {
    return 'The name is: ' + this._name;
};



function Employee(name, title) {
    Person.call(this, name);
    this._title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = () => {
    return Person.prototype.describe.call(this) + ' (' + this._title + ') ';
};