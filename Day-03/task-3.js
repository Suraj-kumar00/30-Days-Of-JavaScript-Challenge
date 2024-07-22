// Nested if-else statements

// Write a program to find the largest of three numbers using nested if-else statements using nested if-else statement

let num1 = 45;
let num2 = 34;
let num3 = 99;

if(num1 > num2){
    if(num1 >num3){
        console.log("num1 is the largest number");
    }
    else{
        console.log("num3 is the largest number");
    }
}
else{
    if(num2 > num3){
        console.log("num2 is the largest number");
    }
    else{
        console.log("num3 is the largest number");
    }
}   