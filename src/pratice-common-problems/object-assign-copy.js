let obj = {
    age: 1, 
    birthYear: 2, 
    name: "satoshi"
}

let objCopy = Object.assign({}, obj);

console.log(objCopy);
objCopy['age'] = 100;
objCopy['name'] = "Nakamoto";

console.log(objCopy);
console.log(obj);

//console.log(JSON.stringify(objCopy));

let nestedObj = {
    age: 10, 
    name: "Bitcoin",
    informationBank: {
        address: "Bank of American", 
        number: 12
    } 
}

let nestedObjCopy = Object.assign(nestedObj);

console.log('When not modifying the properties in objects: ');
console.log(nestedObj);
console.log(nestedObjCopy);


nestedObjCopy.informationBank.number = 100;
nestedObjCopy.informationBank.address = "Wall Street";

console.log('When modified the properties: ');
console.log(nestedObj);
console.log(nestedObjCopy);