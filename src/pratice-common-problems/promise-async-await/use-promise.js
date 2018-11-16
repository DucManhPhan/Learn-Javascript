function add(smallEdge, bigEdge) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof smallEdge !== 'number' || typeof bigEdge !== 'number') {
                return reject(new Error('Parameter must be a number'));
            }

            return resolve(smallEdge + bigEdge);
        }, 2000);
    });
}


function multiply(sumEdge, high) {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            if (typeof sumEdge !== 'number' || typeof high !== 'number') {
                return reject(new Error('Parameter must be a number'));
            }

            return resole(sumEdge * high);
        }, 2000);
    });
}


function divide(doubleArea, dividedNumber) {
    return new Promise((resolve, reject) => {
        if (typeof doubleArea !== 'number' || typeof dividedNumber !== 'number') {
            return reject(new Error('Parameter must be a number'));
        }

        if (dividedNumber === 0) {
            return reject(new Error('The divided number must be differ from 0'));
        }

        return resolve(doubleArea / dividedNumber);
    });
}


function calculateAreaOfTrapezium(smallEdge, bigEdge, high) {
    add(smallEdge, bigEdge).then(result => {
        multiply(result, high).then(result => {
            divide(result, 2).then(result => {
                console.log('The area of the trapezium is: ' + result);
            });
        });
    });
}


calculateAreaOfTrapezium(4, 5, 10);