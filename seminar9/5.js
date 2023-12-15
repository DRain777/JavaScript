function loadData(url) {
  //  js зайдет передаст в функцию url
  const xhr = new XMLHttpRequest(); // потом зоздаст обьект XML...
  xhr.open("Get", url, true); // Инацилизирует его , передаст нужный метод get,  true
  // значит Cинхронное выполнение   если fslse  то Асинхронное выполнение
  xhr.send(); // отправляет эти данные
  xhr.onload = function () {
    // когда придет ответ запусти функцию onload
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
}

loadData("https://jsonplaceholder.typicode.com/users");

// Синхронно это когда все по порядку

// Асинхронно когда код выполняется с задежками в каких то элементах JS всегда должен быть
// Асинхронен для быстроты выполнения!!!
