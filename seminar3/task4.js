// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.
// 2. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

function timeOfDayCaunter() {
  const now = new Date();
  const hours = now.getHours();
  return function (name) {
    if (hours > 6 && hours < 12) {
      return ` Доброе утро  ${name}`;
    } else if (hours > 12 && hours < 18) {
      return ` Добрый день  ${name}`;
    } else if (hours > 18 && hours < 22) {
      return ` Добрый вечер  ${name}`;
    } else if (hours > 22 && hours < 6) { // можно убрать  
      return ` Добрый ночи  ${name}`;
    }else{
        return ` Всему свое время`
    }
  };
}


console.log( timeOfDayCaunter()('Denis'));

