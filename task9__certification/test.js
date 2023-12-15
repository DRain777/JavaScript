async function getUserData(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

// Example usage with await
async function fetchData() {
  try {
    const userData = await getUserData(" https://reqres.in/");
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}

// Or using .then() for handling the Promise
getUserData(" https://reqres.in/")
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.log(error);
  });














/*Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента 
и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. 
Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. 
Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() 
и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/ */

//   console.log(getUserData(5));

//   async function getUserData(id) {
//     const url = `https://reqres.in/api/users/${id}`;
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const user = await response.json();
//         return user.data;
//       } else {
//         throw Error(response.statusText);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
