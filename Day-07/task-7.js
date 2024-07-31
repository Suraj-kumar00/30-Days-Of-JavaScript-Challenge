// The `this` keyword

// task: add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let newBook ={
    title: "The Bible",
    year: 1500,
    bookInfo: function(){
        return this.title + " was within " + this.year + " years";
    }
};
console.log(newBook.bookInfo()); // The Bible was written in 1500
