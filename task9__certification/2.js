
// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *


// Explain
// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/





const url = "https://reqres.in/api/users";

const user = {
  name: "John Doe",
  job: "unknown",
};

saveUserData(user)
  .then(() => {
    console.log("User data saved successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

async function saveUserData(userData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
}






// async function saveUserData(userData) { ... }: Определение асинхронной функции saveUserData, которая принимает данные пользователя и отправляет их на сервер.

// const response = await fetch(url, { ... }): Использует функцию fetch для отправки POST-запроса на сервер. Оператор await ожидает завершения этой асинхронной операции.

// if (response.ok) { return response; } else { throw Error(response.statusText); }: Проверяет успешность HTTP-ответа. Если ответ успешен, функция возвращает объект response. В противном случае выбрасывается ошибка с текстом статуса ответа.

// catch (error) { console.log(error.message); }: Обрабатывает ошибку, если она возникает в блоке try, и выводит сообщение об ошибке в консоль.

// Таким образом, код отправляет POST-запрос на сервер с данными пользователя и выводит сообщение об успешном сохранении данных в случае успешного ответа сервера. Если запрос неудачен, выводится сообщение об ошибке.



















// async function saveUserData(userData) {
//   const url = "https://reqres.in/api/users";

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     console.log("User data saved successfully");
//   } catch (error) {
//     console.error('Error:', error.message);
//     throw error;
//   }
// }

// // Пример использования
// const user = {
//   "name": "John Doe",
//   "job": "unknown",
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// В этом примере:

// Мы используем метод fetch для отправки POST-запроса на указанный URL с заданными заголовками и телом (сериализованным в JSON с помощью JSON.stringify).
// Проверяем, успешен ли HTTP-запрос. Если нет, выбрасываем ошибку.
// Если запрос успешен, выводим сообщение "User data saved successfully".
// Помните, что эта функция должна использоваться в окружении, поддерживающем асинхронный код (например, внутри другой асинхронной функции или с использованием .then()).

