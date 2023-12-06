// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.





function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count += 1;
    },
    decrement: function() {
      count -= 1;
    },
    getCount: function() {
      return count;
    }
  };
}

// Usage
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.decrement();
console.log(counter.getCount()); // Output: 0





















