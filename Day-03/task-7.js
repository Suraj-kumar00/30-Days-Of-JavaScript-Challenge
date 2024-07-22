// WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to ht console.



function isLeapYear(year) { // year is a leap year if it is divisible by 4, but not 100 unless also divisible by 400
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    } else {
        console.log(`${year} is not a leap year`);
    }
}

isLeapYear(2025);