// wap to print numbers form 1 t0 10, but skip the number 5 using continue statement.

let num = 0;

while (num < 10) {
    num++;           // Increment the counter before the continue statement
    if (num == 5) {
        continue;    // Skip the rest of the loop iteration if num is 5
    }
    console.log(num); // Print the number if it is not 5
}
