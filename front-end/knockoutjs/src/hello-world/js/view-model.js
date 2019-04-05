let ViewModel = function() {
    this.name = ko.observable();
};

ko.applyBindings(new ViewModel());