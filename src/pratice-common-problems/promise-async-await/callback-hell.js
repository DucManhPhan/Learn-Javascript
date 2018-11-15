// calculate the area of the trapezium. 
// s = ((a + b) * h) / 2

function add(smallEdge, bigEdge, callback) {
    setTimeout(() => {                
        if (typeof smallEdge != 'number' || typeof bigEdge != 'number') {            
            return callback(new Error('Parameter must be a number'));
        }
         
        callback(undefined, smallEdge + bigEdge);
    }, 10000);
}


function multiply(sumEdge, high, callback) {
    setTimeout(() => {
        if (typeof sumEdge !== 'number' || typeof high !== 'number') {
            return callback(new Error('Parameter must be a number'));
        }

        callback(undefined, sumEdge * high);
    }, 2000);
}


function divide(doubleArea, dividedNumber, callback) {
    setTimeout(() => {
        if (typeof doubleArea !== 'number' || typeof dividedNumber !== 'number') {
            return callback(new Error('Parameter must be a number'));
        }

        if (dividedNumber === 0) {
            return callback(new Error('Divided number is equal to 0.'));
        }

        callback(undefined, doubleArea / dividedNumber);
    }, 3000);
}

function calculateAreaOfTrapezium(smallEdge, bigEdge, high, callback) {
    add(smallEdge, bigEdge, (err, result) => {
        if (err) {            
            return callback(err);
        }

        multiply(result, high, (err, result) => {
            if (err) {               
                return callback(err);
            }

            divide(result, 2, (err, result) => {
                if (err) {                    
                    return callback(err);
                }

                callback(undefined, result);
            });
        });
    });
}

calculateAreaOfTrapezium(4, 5, 10, (err, result) => {
    if (err) {
        return console.log(err + '');        
    }

    console.log('The area of trapezium is: ' + result);
});