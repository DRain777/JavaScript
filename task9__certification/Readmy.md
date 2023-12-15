<details><summary> Стало интересно какие данные еще есть в  https://reqres.in/ 
вот что нашел  
</summary>

 <div id=" https://reqres.in/ " style="max-width: 200px; margin: auto; overflow: hidden;">

  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/id1.jpg" alt="id 1" style="width: 50%;"> email "george.bluth@reqres.in" first_name  "George"  last_name  "Bluth"  id=1
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/id1.jpg" alt="id 1" style="width: 50%;">  first_name  "George" last_nam "Bluth" id=1
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/id2.jpg" alt="id 2" style="width: 50%;">
  first_name "Janet"   last_name  "Weaver" id 2
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/id3.jpg" alt="id 3" style="width: 50%;">
  first_name "Emma"   last_name  "Wong" id 3
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/id4.jpg" alt="id 4" style="width: 50%;">
  first_name "Eve" last_name "Holt" id 4
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/Charles_Moris_id5.jpg" alt="id 5" style="width: 50%;"> first_name "Charles" last_name "Morris" id 5
  <img src="https://github.com/DRain777/JavaScript/blob/algoritm/task9__certification/img/Tracey_Ramos_id6.jpg" alt="id 6" style="width: 50%;">   first_name "Tracey" last_name "Ramos" id 6

</div>


</details>





Урок 4. Асинхронность в Javascript
Домашнее задание

Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/




Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *


Explain
// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/










