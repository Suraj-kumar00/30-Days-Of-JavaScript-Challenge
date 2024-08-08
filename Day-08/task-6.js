// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers){
      // Summing the numbers using the reduce method

    const total = numbers.reduce((acc,curr) => acc+curr,0);
    return total;

}
// Testing the function with different numbers of arguments
console.log(sum(1,2,3,4,5,6,7,8,9,10)); // 55
console.log(sum(1,2,3,4,5)); // 15
console.log(sum(1,2,3)); // 6