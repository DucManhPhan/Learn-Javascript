
// In ES2015, when using the class syntax, 
// you need to define instance variables either in the constructor 
// or one of the methods (there is a proposal for the next iteration, ES2016, to allow for your syntax:
// https://github.com/jeffmo/es-class-static-properties-and-fields

// In Javascript, do not have function statics. So, we can use various abstractions that wrap over a local variable.
const { increased } = new class {
    count = 0;
    increased = () => {
        ++this.count;
        console.log(`Called: ${this.count}`);
    }
};

// first call
increased();

// second call
increased();