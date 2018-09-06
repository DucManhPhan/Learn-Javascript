// Fix the side effect in closures
// Use the "Immediately Invoked Function Expression (IIFE)"

function celebrityIDCreator (theCelebrities) {
    var i; 
    var uniqueID = 100;

    for (i = 0; i < theCelebrities.length; ++i) {
        theCelebrities[i]["id"] = function (j) {
            return function () {
                return uniqueID + j;
            } ()  // this function will be immediately called. 
        } (i);  // the argument i will be passed to the parameter j, and then immediately executed. 
    }

    return theCelebrities;
}


var actionCelebs = [{name: "Stallone", id = 0}, {name: "Cruise", id = 0}, {name: "Willis", id = 0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id);

var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID.id);
