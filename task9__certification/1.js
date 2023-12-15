// Задание 1. Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в
// качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с
// удаленного сервера. Функция должна возвращать промис, который разрешается с данными о
// пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен
// быть отклонен с соответствующим сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(url) {
  try {
    const response = fetch(url);
    const data = [];
    
    if (response.ok) {
      const data = await response.json(); 
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

// console.log(getUserData(" https://reqres.in/"));

console.log(getUserData(" https://jsonplaceholder.typicode.com/users"));
