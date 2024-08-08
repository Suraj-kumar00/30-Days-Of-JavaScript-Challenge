// Default Parameter
// task 7: Write a function that takes parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second paramter.

function product(a,b=1){
    return a*b;
}

const result = product(5,2); // with first and second parameter
console.log(result);
console.log(product(5)); // without  second parameter