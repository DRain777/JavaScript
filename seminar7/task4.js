/**
 * Создайте класс Person, который имеет свойства name и age, а также
метод introduce(), который выводит сообщение в консоль с 
представлением имени и возраста персоны.
const person = new Person("John", 25);
person.introduce(); // "My name is John and I'm 25 years old."
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name}   I'm  ${this.age} years old   `);
  }
}

const person = new Person("John", 25);
person.introduce();
