// write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.

const higherOrderFunction = function(func1, func2, value){
    return func2(func1(value));
}

const double = function(x){
    return x *2;
}

const square = function(x){
    return x*x;
}

// using higher order concept:

console.log(higherOrderFunction(double, square, 3)); // here the higherOrderFunction is taking two functions as an arguments and a value to give the result.
