// Необходимо получить список пользователей с сервера , отсортировать их
// в алфавитном порядке и вывести в тег Ul (его необходимо создать в html )
// на странице дан спимок пользователей .
// Api:
// https://jsonplaceholder.typicode.com/users

async function loadData(url) {
  try {
    const response = await fetch(url);   // принести
    if (response.ok) {
      const arr = await response.json();
      arr.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      console.log(arr);
    }
  } catch (error) {
    console.log(error);
  }
}

// getUsers("https://jsonplaceholder.typicode.com/users");

loadData("https://jsonplaceholder.typicode.com/users");
 console.log( loadData("https://jsonplaceholder.typicode.com/users"));
