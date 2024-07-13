## This is the Day-1 of 30 Days of Js Challenge

### These topic were covered:

### Activity 1: Variable Declaration

- **Definition**: Variable declaration in JavaScript is done using the `let` and `var` keywords. Variables declared with `let` are block-scoped, while those declared with `var` are function-scoped.
- **Code Snippet**:
  ```javascript
  let age = 25;  // Using let
  var name = "John";  // Using var

  console.log(age);  // Outputs: 25
  console.log(name);  // Outputs: John
  ```

### Activity 2: Constant Declaration

- **Definition**: Constants in JavaScript are declared using the `const` keyword. Constants must be initialized at the time of declaration and cannot be reassigned.
- **Code Snippet**:
  ```javascript
  const PI = 3.14159;
  console.log(PI);  // Outputs: 3.14159

  // PI = 3.14; // This will throw an error
  ```

### Activity 3: Data Types

- **Definition**: JavaScript has several data types including `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`, and `Object`.

- BigInt in JavaScript
Definition: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than the safe integer limit for Number type, which is 
2^53
 −1. It allows the handling of large integers without precision loss.
- Usage: BigInt can be created by appending n to an integer literal or by using the BigInt function.

- **Code Snippet**:
  ```javascript
  let age = 30;  // Number
  let name = "Alice";  // String
  let isStudent = false;  // Boolean
  let notAssigned;  // Undefined
  let emptyValue = null;  // Null
  let bigNumber = 1234567890123456789012345678901234567890n;

  

  console.log(typeof age);  // Outputs: number
  console.log(typeof name);  // Outputs: string
  console.log(typeof isStudent);  // Outputs: boolean
  console.log(typeof notAssigned);  // Outputs: undefined
  console.log(typeof emptyValue);  // Outputs: object 
  (special case for null)
  console.log(bigNumber);  // Outputs: 1234567890123456789012345678901234567890n

  ```

### Activity 4: Reassigning Variables Values

- **Definition**: Variables declared with `let` or `var` can be reassigned new values. Constants declared with `const` cannot be reassigned.
- **Code Snippet**:
  ```javascript
  let age = 25;
  console.log(age);  // Outputs: 25

  age = 30;  // Reassigning the value
  console.log(age);  // Outputs: 30
  ```

### Activity 5: Understanding `const`

- **Definition**: The `const` keyword declares constants, which are block-scoped and cannot be reassigned after their initial assignment. However, for objects, the properties can still be modified.
- **Code Snippet**:
  ```javascript
  const person = { name: "John", age: 25 };
  console.log(person);  // Outputs: { name: "John", age: 25 }

  // person = { name: "Alice", age: 30 }; // This will throw an error

  // Modifying the properties of the object is allowed
  person.age = 30;
  console.log(person);  // Outputs: { name: "John", age: 30 }
  ```

These explanations and snippets should help in understanding the fundamental concepts of variable and constant declarations, data types, reassigning variables, and using constants in JavaScript.