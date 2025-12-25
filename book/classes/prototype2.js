// Функция-конструктор для класса Book
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Метод для Book через прототип
Book.prototype.getInfo = function () {
    return `Title: ${this.title}, Author: ${this.author}`;
};

// Функция-конструктор для класса EBook (наследник Book)
function EBook(title, author, fileSize) {
    Book.call(this, title, author); // Наследуем свойства Book
    this.fileSize = fileSize; // Свойство для размера файла
}

// Наследуем прототип Book
EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;

// Добавляем метод для EBook
EBook.prototype.getFileInfo = function () {
    return `${this.getInfo()}, File size: ${this.fileSize}MB`;
};

// Пример использования
const myEBook = new EBook('JavaScript Guide', 'John Doe', 5);
console.log(myEBook.getFileInfo()); // Выведет: Title: JavaScript Guide, Author: John Doe, File size: 5MB
