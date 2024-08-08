//Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "The Bible",
    author: "40 different authors"
}

const {title,author} = book;

console.log("The title of the book:",title);
console.log("The authors:",author);