'use strict'


class Person {
    constructor(firstName, lastName, birthYear, country) {
        this._firstName = firstName;
        this._lastName  = lastName;
        this._birthYear = birthYear;
        this._country = country;
    }

    // get/set properties
    get fullName() {
        return this._firstName + ' ' + this._lastName; 
    }

    set fullName(name) {
        let words = name.toString().split(" ");
        this._firstName = words[0] || '';
        this._lastName = words[1] || '';
    }

    // Method
    isEngland() {
        return this._country === "England";
    }

    static isFunny() {
        return true;
    }
}

let person = new Person("Satoshi", "Nakamoto", 2009, "Japanese");

Object.defineProperty(person, 'age', {
    get: function() {
        let today = new Date();
        let currentYear = today.getFullYear();
        return currentYear - this._birthYear;
    }
});

//console.log(person.fullName);

//person.fullName = "Donald Trump";

//console.log(person.fullName);

console.log(person.age);
console.log(person.isEngland());

console.log(Person.isFunny());

// can not know the age property that can be used in other object of Person class.
let trump = new Person("Donald", "Trump", "1946", "American");
console.log(trump.age);  // undefined