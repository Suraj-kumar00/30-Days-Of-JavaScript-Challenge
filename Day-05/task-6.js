//write an arrow function to check if a string contains a specific character and return a boolean value.

const checkIfStringContainsChar = (str, char) => {
    return str.includes(char);// Inside the function, the includes method of the String object is used.
    // str.includes(char) checks if the string str contains the substring char.
    // The includes method returns true if the substring is found, otherwise it returns false.
}
console.log(checkIfStringContainsChar('hello', 'h')); // true
console.log(checkIfStringContainsChar('hello', 's')); // false