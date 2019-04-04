let ViewModel = function(first, last) {
    this.firstName = ko.observable(first);//"Google"; 
    this.lastName = ko.observable(last);//"Facebook";

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
};

ko.applyBindings(new ViewModel("Plannet", "Earth"));