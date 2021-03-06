const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same.
// The promisify is used when the callback of the asynchronous operation is the common error-first callback style: 
// "(err, result) => {...}" - callback as the last argument, and returns a version that returns promises.
// If not, use the custom promisify.
const readFile = util.promisify(fs.readFile);

async function readFileAsync() {
    return await readFile('./files/check.txt', 'utf8');
}

// Can't use `await` outside of an async function so you need to chain
// with then()
//readFileAsync().then(data => console.log(data));

async function getDataFromFile() {
    let data = await readFile('./files/check.txt', 'utf8');
    console.log(data);
}

getDataFromFile();