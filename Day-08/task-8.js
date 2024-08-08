// Enhanced Object Literals
// task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// variables to be used in the object:
const name = "Chatbot";
const version = "1.3.0";
const greet =() => "Hello, how can I assist you today?";

// object with methods and properties(Enhanced object literals):
const chatbot = {
    name,
    version,
    greet,
    getDetails(){
        return `This is ${this.name}, version ${this.version}`;
    }
};

// log the object to the console:
console.log(chatbot);

// use the object's methods and properties
console.log(chatbot.greet());
console.log(chatbot.getDetails());