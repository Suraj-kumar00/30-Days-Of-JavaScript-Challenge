// Object Methods:
//task: Add a method to the book object that returns a string with the book's title and author, and log the result to the console.

let newBook = {
    title: "The Bible",
    author: "40 different author",
    year: "1500",
    bookInfo: function(){
        return this.title + " was written by " + this.author;
    }
};

console.log(newBook.bookInfo());