// Nested loop

// wap to print a pattern using nested for loop

let rows = 5; // Number of rows for the pattern
for (i = 1; i <=rows; i++){ // Outer loop for rows
    let pattern = ''; // Initialize an empty string to store the pattern for the current row
    
    for (j = 1; j <=i; j++){ // Inner loop for columns
        pattern += 'S';  // Append an asterisk to the pattern string
    }
    console.log(pattern);// Print the pattern for the current row
}