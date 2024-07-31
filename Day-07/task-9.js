// Use Object.keys and Object.values methods to log all the keys and values of the book object.

let newBook = {
    title: "The Bible",
    author: "40 different authors",
    year: "1500",
};

// this is one way log the key and value of newBook
const key = Object.keys(newBook);
console.log("keys:", key);

const value = Object.values(newBook);
console.log("values:", value);