const fs = require('fs');


function readFileAsync() {
    return Promise((resolve, reject) => {
        fs.readFile('./files/check.txt', 'utf8', (err, data) => {
            if (err) {
                return reject(new Error('Do not read file.'));
            }

            resolve(data);
        });
    });
}


readFileAsync().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err + '');
});