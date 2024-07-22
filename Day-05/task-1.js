// Functions

// waf to check if a number is even or odd and log the the console.

function checkEvenOdd(num){
    if (num % 2 == 0){
        console.log(`${num} is an even number`); // use backticks here to simultaneously print the test the the number 
    }
    else{
        console.log(`${num} is a odd number`);
    }
}
checkEvenOdd(10); // 10 is an even number
checkEvenOdd(7); // 7 is an even number