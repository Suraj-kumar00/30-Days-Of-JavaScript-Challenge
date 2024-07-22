// WAP that uses a switch case to assign a grade(A, B, C, D, F) to a student based on a score and log the grade to the console.

let score = 99;

switch (true){
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    case score >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}