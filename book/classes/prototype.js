// // Создаем функцию-конструктор для класса Book
// function Book(title, author) {
//     this.title = title; // Свойство title
//     this.author = author; // Свойство author
// }
//
// // Добавляем метод getInfo к прототипу Book
// Book.prototype.getInfo = function () {
//     // Метод возвращает строку с информацией о книге
//     return `Title: ${this.title}, Author: ${this.author}`;
// };
//
// // Создаем экземпляр класса Book
// const myBook = new Book('JavaScript Guide', 'John Doe');
//
// // Вызываем метод getInfo у экземпляра
// console.log(myBook.getInfo()); // Выведет: Title: JavaScript Guide, Author: John Doe

// Base class Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

// Derived class EBook
class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author); // Call parent constructor
        this.fileSize = fileSize;
    }

    getFileInfo() {
        return `${this.getInfo()}, File size: ${this.fileSize}MB`;
    }
}

// Example usage
const myEBook = new EBook('JavaScript Guide', 'John Doe', 5);
console.log(myEBook.getFileInfo()); // Output: Title: JavaScript Guide, Author: John Doe, File size: 5MB
