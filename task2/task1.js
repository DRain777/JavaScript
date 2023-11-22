


// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.



const num1 = +prompt(`Введите первое число`);

alert(
  num1 <= 1
    ? ` Первое число ${num1}  равна или меньше единицы `
    : ` ${num1} не равна и больше единицы  `
);

const num2 = +prompt(`Введите второе число`);
alert(
  num2 >= 3
    ? `Второе  число ${num2} больше или равно 3 `
    : ` Второе  число ${num2} меньше и неравно 3  `
);




// const num1 = +prompt("Enter the first number");
// const num2 = +prompt("Enter the second number");

// if (num1 <= 1 && num2 >= 3) {
//   alert(
//     "Condition satisfied: num1 is less than or equal to 1, and num2 is greater than or equal to 3     Условие выполнено: число 1 меньше или равно 1, а число 2 больше или равно 3."
//   );
// } else {
//   alert("Condition not satisfied  Условие не удовлетворено");
// }

