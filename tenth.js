function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Example of creating new book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

// Output the book objects
console.log(book1);
console.log(book2);
