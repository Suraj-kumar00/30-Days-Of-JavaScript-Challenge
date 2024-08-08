// Spread and Rest Operators

// task 5: Use the spread operator to create a new array that includes all the elements of an existing array plus additional elements, and log the new array to the console.

const arr = [1,2,3,4];
const newarr = [...arr,5,6,7,8]; // here we are using spread operator which is `...` that copies the content of arr into newarr and aso adding new elements.

console.log(newarr);