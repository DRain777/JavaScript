const vacumCleaner = {
  model: "vacum clener",
  counterOfStarter: 0,
  isFull: false, //   is Является   полным
  isObstavle: false, //  obstavle препятствия

  startCleaning: function () {
    this.counterOfStarter++;
    // добавим дополнительный ввод , что бы узнать чей метод вызвали
    console.log("I am the method of vacumClener");
    console.log(
      "I am cleaning... Ihave been started: ",
      this.counterOfStarter,
      "times"
    );
  },

  goCharge() {
    // Добавим дополнительный вывод, что бы узнать чей метод вызвали.
    console.log("I am the method of vacumClener");
    console.log("I am go9ng to charge...");
  },
};
