// Object iteration:

// task: Use a for...in loop to iterate over the properties of the book object and log the each property and its value.

let newBook = {
    title: "The Bible",
    author: "40 different authors",
    year: "1500",
};

// this is for...in loop to access the newBook property and values

for (let key in newBook){
    console.log(key + ":" + newBook[key]);
}