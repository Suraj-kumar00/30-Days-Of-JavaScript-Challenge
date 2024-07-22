// wap to calculate the factorial of a number using a do...while loop

let num = 5; // i want to calculate the !(factorial) of 5 here
let fact = 1; // initial value of fact and it also store the result, and it should be 1, not 0 or any other number.
do {
    fact *= num; // fact = fact* num => 1*5 = 5
    num--; // 5-1 = 4 , this is the first iteration and will continue till 5 reduces to 0
}
while (num >= 1); // when num = 0 loop will break
console.log(fact) // to print the result
