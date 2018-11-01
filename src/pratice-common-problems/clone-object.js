function clone(obj) {
    if (obj == null || typeof(obj) != 'object')
      return obj;
  
    var temp = new obj.constructor();
    for (var key in obj)
      temp[key] = clone(obj[key]);
  
    return temp;
}

let nestedObj = {
    age: 10, 
    name: "Bitcoin",
    informationBank: {
        address: "Bank of American", 
        number: 12
    } 
}

let nestedObjCopy = clone(nestedObj);

console.log('When not modifying the properties in objects: ');
console.log(nestedObj);
console.log(nestedObjCopy);


nestedObjCopy.informationBank.number = 100;
nestedObjCopy.informationBank.address = "Wall Street";

console.log('When modified the properties: ');
console.log(nestedObj);
console.log(nestedObjCopy);