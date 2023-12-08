// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

// // Пример использования класса
// const book = new Book("BookName1", "Author1", 123);
// book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"


class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo(){

    console.log(`Назваие книги ${ this.title}, автор ${this.author}, количество страниц ${this.pages}`);
  }

}


const book = new Book("Peaceful Warrior","Dan Millman", 170);
book.displayInfo();

