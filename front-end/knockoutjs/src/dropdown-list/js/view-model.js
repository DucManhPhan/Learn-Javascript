 // Constructor for an object with two properties
let Country = function(name, population) {
    this.countryName = name;
    this.countryPopulation = population;
};

let DropDownListViewModel = function() {
    this.availableCountries = ko.observableArray([
        new Country("UK", 65000000),
        new Country("USA", 320000000),
        new Country("Sweden", 29000000)
    ]);

    this.selectedCountry = ko.observable() // Nothing selected by default
};

ko.applyBindings(new DropDownListViewModel());