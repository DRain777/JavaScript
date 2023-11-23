/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/






const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
const num3 = +prompt("Введите третье число");

function max(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

const res = max(num1, num2, num3);
console.log(
  `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${res}`
);

console.log(max(7, 19, 5));




function ifMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}


console.log(ifMax(7, 19, 55));


