// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the  updated obejct.

let newBook ={
    year: "1500",
    newYear: function(year){ // this fucntion will return the new year
        this.year = year;
    }
};

newBook.newYear("2024") // here passing new year
console.log(newBook);