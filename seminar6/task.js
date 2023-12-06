"use strick";

const arr = [1, 4, 7, 4, 8, 27, 8, 5, 10];
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6] */

// function mergeArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

//  console.log( mergeArrays([1, 2, 3], [4, 5, 6]) );

//  2    /////////////

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates  (...params) {
//     return params.filter((item,index) => params.indexOf(item) === index);

// }
// console.log( removeDuplicates ( 1, 2, 3, 2, 4, 1, 5  ) );

// function removeDuplicates  (...params) {
//     return [...new Set(params).values()];

// }
// console.log( removeDuplicates ( 1, 2, 3, 2, 4, 1, 5  ));

// 3   /////////////////

// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function getEvenNumbers(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// function getEvenNumbers(arr) {
//   return arr.filter((item) => item % 2 === 0  );

// }
// const arr = [1, 4, 6, 8, 4, 3, 2, 7, 3];
// console.log(getEvenNumbers(arr));

// . Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

//  function calculateAverage(arr){
//   return arr.reduce((acc, a) => acc + a, 0) / arr.length;

//  }

//  console.log(calculateAverage(arr));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

//  function capitalizeFirstLetter(str) {

//   const words = str.split('');
//   for (let i = 0; i < words.length; i++) {
//    words[i] = words[i][0].toUpperCase() + words[i].slice(1);

//   }
//   return words.join('');
//  }

//  console.log(
//    capitalizeFirstLetter(
//      "качестве аргумента и возвращает новую строку, в которой первая"
//    )
//  );

//   function capitalizeFirstLetter(str) {
//     // Split the string into an array of words
//     const words = str.split(" ");

//     // Capitalize the first letter of each word
//     const capitalizedWords = words.map(
//       (word) => word.charAt(0).toUpperCase() + word.slice(1)
//     );

//     // Join the words back into a string
//     const result = capitalizedWords.join(" ");

//     return result;
//   }

//   // Example usage:
//   const inputString = "hello world";
//   const resultString = capitalizeFirstLetter(inputString);
//   console.log(resultString);

// function capitalizeFirstLetter(string) {

//   return string.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
// }
// console.log(capitalizeFirstLetter(" напишите функцию capitalizeFirstLetter, которая принимает строку"));

// function capitalizeFirstLetter(string) {
//   return string
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// ;console.log(
//   capitalizeFirstLetter(
//     " напишите функцию capitalizeFirstLetter, которая принимает строку"
//   )
// );

// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

// function createCalculator(initialValue) {
//   let value = initialValue;

//   return {
//     add: function (number) {
//       value += number;
//     },
//     subtract: function (number) {
//       value -= number;
//     },
//     getValue: function () {
//       return value;
//     },
//   };
// }

// // Example usage:
// const calculator = createCalculator(10);
// calculator.add(5);
// console.log(calculator.getValue()); // Output: 15
// calculator.subtract(3);
// console.log(calculator.getValue()); // Output: 12

// function createCalculator(num) {
//   let result = num;
//   return {
//     res() {
//       return result;
//     },

//     add(num) {
//       result += num;
//     },

//     subtrackt(num) {
//       result -= num;
//     },
//   };
// }

// const calc = createCalculator(5);
// calc.add(17);
// calc.subtrackt(5);
// console.log(calc.res());

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

//  const greeting = createGreeting("");

// function createGreeting(str) {

//   return( `Hello ${str} ! `);
// }
// // console.log(createGreetin("Denis"));
// console.log(greeting("Denis"));

// function createGreeting(name) {
//   return function () {
//     return ` hello ${name} !`;
//   };
// }
// const greeting = createGreeting(" Denis");
// console.log(greeting(""));

// console.log(createGreeting("Denis"));

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker(minLength) {
//   return function (password) {
//     if (password.length >= minLength) return true;
//     else {
//       return false;
//     }
//   };
// }
// const isPasswordValid = createPasswordChecker(8);
//  console.log(isPasswordValid('password')); // Ожидаемый результат: false
//  console.log(isPasswordValid('secret')); // Ожидаемый результат: true






//  function createPasswordChecker(minLength) {
//   return function (password) {
//     return password.length >= minLength;


//   };

  
//  }










//  Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)





  //  digits цифры;перевод 

function sumDigits(number) {
  // Convert the number to a string to iterate over its digits
  // Преобразуйте число в строку для перебора его цифр.
  const digits = String(number);

  // Base case: if there's only one digit, return that digit
  // Базовый случай: если есть только одна цифра, вернуть эту цифру
  if (digits.length === 1) {
    return parseInt(digits);
  }

  // Recursive case: sum the current digit with the sum of the rest of the digits
  // Рекурсивный случай: суммируем текущую цифру с суммой остальных цифр
  return parseInt(digits[0]) + sumDigits(parseInt(digits.slice(1)));
}

// Example usage:
// Пример использования:
console.log(sumDigits(123));     // Expected: 6 (1 + 2 + 3)
console.log(sumDigits(456789));  // Expected: 39 (4 + 5 + 6 + 7 + 8 + 9)
