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












// async function getUserData(userId) {
//   try {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`);

//     if (response.ok) {
//       const userData = await response.json();
//       return userData.data; // Возвращаем объект данных о пользователе
//     } else {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Failed to fetch user data");
//     }
//   } catch (error) {
//     console.error(error.message);
//     throw error; // Прокидываем ошибку дальше
//   }
// }

// // Пример использования функции
// const userId = 2; // Замените на нужный ID пользователя
// getUserData(userId)
//   .then((userData) => {
//     console.log("User Data:", userData);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });










