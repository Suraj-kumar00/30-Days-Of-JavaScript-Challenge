// Use the reduce method to calulate the sum of all numbers in the array and  log the result.

let arr = [1,2,3,4,5];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 