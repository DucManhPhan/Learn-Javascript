function add(smallEdge, bigEdge) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof smallEdge !== 'number' || typeof bigEdge !== 'number') {
                return reject(new Error('Parameter must be a number'));
            }

            resolve(smallEdge + bigEdge);
        }, 2000);
    });
}


function multiply(sumEdge, high) {

}


function divide(doubleArea, dividedNumber) {

}

add(4, '5').then(res => console.log(res))
.catch(errMsg => console.log(errMsg + ''));

