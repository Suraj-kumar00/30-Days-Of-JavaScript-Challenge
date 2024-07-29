# Important topics to understand:

### `map()`

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];

// Use map to double each number
let doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

### `filter()`

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];

// Use filter to get only the even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

### `reduce()`

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];

// Use reduce to sum all the numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
```

Let's break down the `reduce()` example:

### Explanation

1. **Initial Setup**: 
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```
   You have an array of numbers `[1, 2, 3, 4, 5]`.

2. **Reduce Method**: 
   ```javascript
   let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   ```
   The `reduce()` method takes two arguments:
   - A reducer function `(accumulator, currentValue) => accumulator + currentValue`
   - An initial value for the accumulator, which is `0` in this case.

3. **Reducer Function**:
   ```javascript
   (accumulator, currentValue) => accumulator + currentValue
   ```
   This function takes two parameters:
   - `accumulator`: It accumulates the sum of the elements. Initially, it is the value provided as the second argument to `reduce()`, which is `0`.
   - `currentValue`: The current element being processed in the array.

4. **Execution Steps**:
   - **First iteration**:
     - `accumulator` = 0 (initial value)
     - `currentValue` = 1 (first element of the array)
     - New `accumulator` = 0 + 1 = 1
   - **Second iteration**:
     - `accumulator` = 1
     - `currentValue` = 2
     - New `accumulator` = 1 + 2 = 3
   - **Third iteration**:
     - `accumulator` = 3
     - `currentValue` = 3
     - New `accumulator` = 3 + 3 = 6
   - **Fourth iteration**:
     - `accumulator` = 6
     - `currentValue` = 4
     - New `accumulator` = 6 + 4 = 10
   - **Fifth iteration**:
     - `accumulator` = 10
     - `currentValue` = 5
     - New `accumulator` = 10 + 5 = 15

5. **Final Result**:
   - After processing all elements, the `accumulator` holds the final result, which is `15`.

6. **Output**:
   ```javascript
   console.log(sum); // Output: 15
   ```
---
### In short:

- **`map()`**: Transforms each element in the array and returns a new array.
- **`filter()`**: Filters elements in the array based on a condition and returns a new array.
- **`reduce()`**: Reduces the array to a single value using a reducer function.