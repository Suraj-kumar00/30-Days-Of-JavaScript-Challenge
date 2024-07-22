// write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.


const greetingMessage = (name, age=21) => {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greetingMessage('Suraj')); // Hello John, you are 21 years old.