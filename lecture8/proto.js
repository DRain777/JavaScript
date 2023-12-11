// Обьявление родительского обьекта смотрт в листинге 1.
// Обьект робот-пылесос.
const dansinCeries = {
  // Обьявляем новые свойства и переопределить свойства model
  model: "dencing series",
  power: 200,
  battereySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  isULVampOn: false,
  // добовляем новый метод.
  swithULVamp() {
    // Добавим дополнительный вывод, что бы узнать чей метод вызвали.
    console.log("I am the method of  dansinCeries");
    this.isULVampOn = !this.isULVampOn;
    console.log(`UV lamp is ${this.isULVampOn ? "work" : "not working"}`);
  },
  // Делаем ссылку н прототип от родителей .
  __proto__: vacumCleaner,
};


// console.log(dansinCeries.startCleaning());


console.log(dansinCeries.goCharge());