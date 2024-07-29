//Use the map method to create a new array where each number is doubled and log the new array.

let arr = [1,2,3,4,5];

let newArr = arr.map((num) => { // arr.map() is how you call the map() method on the array arr.
//The function inside map() is called a callback function. It's the function that's applied to each element of the array.
    return num * 2;
}
);
console.log(newArr);