const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same.
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