function recursiveDeepCopy(o) {
    var newO,
      i;
  
    if (typeof o !== 'object') {
      return o;
    }
    if (!o) {
      return o;
    }
  
    if ('[object Array]' === Object.prototype.toString.apply(o)) {
      newO = [];
      for (i = 0; i < o.length; i += 1) {
        newO[i] = recursiveDeepCopy(o[i]);
      }
      return newO;
    }
  
    newO = {};
    for (i in o) {
      if (o.hasOwnProperty(i)) {
        newO[i] = recursiveDeepCopy(o[i]);
      }
    }
    return newO;
}

let nestedObj = {
    age: 10, 
    name: "Bitcoin",
    informationBank: {
        address: "Bank of American", 
        number: 12
    } 
}

let nestedObjCopy = recursiveDeepCopy(nestedObj);

console.log('When not modifying the properties in objects: ');
console.log(nestedObj);
console.log(nestedObjCopy);


nestedObjCopy.informationBank.number = 100;
nestedObjCopy.informationBank.address = "Wall Street";

console.log('When modified the properties: ');
console.log(nestedObj);
console.log(nestedObjCopy);