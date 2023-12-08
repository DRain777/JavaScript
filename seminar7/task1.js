// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");



const person = {
  name: "John",
  age: 25,
  gender: "male",
  introduce: function () {
    console.log(
      `My name is ${this.name}   I'm  ${this.age} years old and I identify as ${this.gender}  `
    );
  },

  changeName: function (newName) {
    this.name = newName;
  }
};


person.height = 1.77;
person.weigt = 77;
person.changeName('Denis');
console.log(person.name);
console.log(person.introduce());
console.log(person);
// {
//   name: 'Denis',
//   age: 25,
//   gender: 'male',
//   introduce: [Function: introduce],
//   changeName: [Function: changeName],
//   height: 1.77,
//   weigt: 77
// }
























//   introduce() {
//     console.log(
//       `My name is ${this.name}   I'm  ${this.age} years old and I identify as ${this.gender}  `
//     );
//   },

//   changeName(newName) {
//     this.name = newName;
//   }

        ////// Запись по Новому. в Обьекте старая запись....

