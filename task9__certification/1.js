// Задание 1. Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в
// качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с
// удаленного сервера. Функция должна возвращать промис, который разрешается с данными о
// пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен
// быть отклонен с соответствующим сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(id) {
  const url = `https://reqres.in/api/users/${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const user = await response.json();
      return user.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
}

console.log(getUserData(3));
getUserData(3).then((userData) => console.log(userData));

// async function: Это асинхронная функция, что означает, что она может использовать оператор await для ожидания асинхронных операций.

// const url = https://reqres.in/api/users/${id}`;`: Создается URL для запроса на API reqres.in с указанным id.

// const response = await fetch(url);: Используется fetch для отправки HTTP-запроса по указанному URL. Оператор await позволяет дождаться завершения этой асинхронной операции.

// if (response.ok) { ... } else { ... }: Проверяется, успешен ли HTTP-запрос. Если ответ сервера имеет статус "OK" (в пределах 200-299), код продолжает выполнение. В противном случае генерируется ошибка.

// const user = await response.json();: Если запрос успешен, извлекается тело ответа в формате JSON. Оператор await снова ожидает завершение асинхронной операции.

// return user.data;: Возвращается часть данных пользователя из JSON-ответа.

// throw Error(response.statusText);: Если HTTP-запрос не успешен, генерируется ошибка с текстом статуса ответа.

// catch (error) { ... }: Обрабатывается ошибка, если она произошла в блоке try.

// console.log(error.message);: Выводится сообщение об ошибке в консоль.

// throw error;: Ошибка снова выбрасывается (пропагируется дальше), чтобы ее можно было обработать в вызывающем коде, если это необходимо.

// Вызов функции и вывод результата в консоль:

// console.log(getUserData(3));
// Функция getUserData(3) вызывается с аргументом 3 (это id пользователя). Однако, так как getUserData является асинхронной функцией, она возвращает Promise. Прямой вывод console.log(getUserData(3)); не даст ожидаемого результата.

// Для правильного использования результат функции можно обработать с использованием then:

//  getUserData(3).then(userData => console.log(userData));
// Или использовать async/await в контексте другой асинхронной функции:

// ОПТИМАЛЬНОЕ РЕШЕНИЕ!!!

async function getUserData(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (response.ok) {
    const respData = await response.json();
    return respData.data;
  }
  throw new Error(await response.text());
}

getUserData(3)
  .then(result => console.log(result))
  .catch(err => console.log(`Ошибка: ${err.message}`)); // тут уже ошибка


