const arr2 = [1, 2, 3, 5, 7];
const arr1 = [1, 1, 1, 1, 1];

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// console.log(mergeArrays(arr1,arr2));
//  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2...............
// function removeDuplicates(...params){
//   return params.filter((item,index)  => params.indexOf(item) === index   )
// }

//  console.log(removeDuplicates
// (1,1,1,3,3,3,2,2,27,7,5));

// function removeDuplicates(...params){
//   return [...new Set(params).values()];

// }

const arr = [1, 4, 7, 4, 8, 27, 8, 5, 10];

// function getEvenNumbers(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) result.push(arr[i]);
//   }
//   return result;
// }
// console.log(getEvenNumbers(arr));

function getEvenNumbers(arr) {
  return arr.filter((item) => item % 2 === 0);
}

console.log(getEvenNumbers(arr));

function calculateAverage(arr) {
  return arr.reduce((acc, a) => acc + a, 0) / arr.length;
}
console.log(calculateAverage(arr));

// / 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(num) {
  let result = num;
  return {
    res() {
      return result;
    },

    add(num) {
      result += num;
    },

    subtrackt(num) {
      result -= num;
    },
  };
}


const calc = createCalculator(5);
calc.add(17);
calc.subtrackt(5);
console.log(calc.res());













// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"