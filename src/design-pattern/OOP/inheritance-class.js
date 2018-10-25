'use strict'

// Use the new feature in ES6.
class Person {
    constructor(name) {
        this._name = name;
    }

    describe() {
        return 'The name is: ' + this._name;
    }
}


class Employee extends Person {
    constructor(name, title) {
        super(name);
        this._title = title;
    }

    describe() {
        return super.describe() + ' (' + this._title + ') ';
    }
}

let emp = new Employee("Michael", "Engieneer");

console.log(emp.describe());