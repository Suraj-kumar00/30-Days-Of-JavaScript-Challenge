// High-Order Functions

// write a higher-order functions that takes a function and a number, and calls the function that many times.


const repeatFunction = function(func, times) {
    for (let i = 0; i < times; i++) { 
        func(); // Call the provided function
    }
};

// Example function to be called
const sayHello = function() {
    console.log('Hello!');
};

// Using the higher-order function
repeatFunction(sayHello, 10); 
