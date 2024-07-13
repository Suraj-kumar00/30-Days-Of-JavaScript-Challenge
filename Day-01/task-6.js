// Try reassigning a variable declared with const and observe the error message.

const number = 10;
console.log(number);
number = 20; // this will give a TypeError: Assignment to constant variable.
console.log(number);

// This code will give error because we cannot redeclare a variable using const keyword. But it's possible with var and let keyword.