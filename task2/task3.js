// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = +prompt("Введите  день  от 1 до 31");
if (day > 0 && day < 11) {
  alert(` ${day} день поппадает на 1 декаду  `);
} else if (day > 11 && day < 21) {
  alert(` ${day} день поппадает на 2 декаду  `);
} else if (day > 21 && day < 31) {
  alert(` ${day} день поппадает на 3 декаду  `);
} else {
  alert(" Введено не верное значение");
}





// let day = 15; // Замените значение переменной day на нужное число

// let decade =
//   day >= 1 && day <= 10
//     ? "Первая декада месяца"
//     : day > 10 && day <= 20
//     ? "Вторая декада месяца"
//     : day > 20 && day <= 31
//     ? "Третья декада месяца"
//     : "Число не входит в допустимый диапазон от 1 до 31";

// console.log(decade);

