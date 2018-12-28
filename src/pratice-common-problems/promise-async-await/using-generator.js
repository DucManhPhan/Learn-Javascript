function* numberGenerator() {
    yield 5; 
    yield 7; 
    yield 10;
}

const iterator = numberGenerator();

const firstIterator = iterator.next();
const secondIterator = iterator.next();
const thirdIterator = iterator.next();

console.log(firstIterator);
console.log(secondIterator);
console.log(thirdIterator);