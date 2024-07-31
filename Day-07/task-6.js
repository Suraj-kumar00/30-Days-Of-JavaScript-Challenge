// Access and log the name of the library and the titles of all the books in the libaray.


let library = {
    name: "Bible",
    books: [
        {
            title: "Metthew",
            author: "Methew",
            year: "1st Century"
        },
        {
            title: "Mark",
            author: "Mark",
            year: "1st Century"
        },
        {
            title: "Luke",
            author: "Luke",
            year: "1st Century"
        },
        {
            title: "John",
            author: "John",
            year: "1st Century"
        }
    ]

};

console.log("Name of the Library:",library.name);
console.log("Name of title of all the books:")

// this is one way to access all the titble of the library obejct as it is an array:
// console.log(library.books[0].title);
// console.log(library.books[1].title);
// console.log(library.books[2].title);
// console.log(library.books[3].title);

// but we can do loop also on it:

for (let i = 0; i <library.books.length;i++){
    console.log(library.books[i].title);
}
