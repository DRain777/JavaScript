


//  Работа должна быть выполнена с API: https://reqres.in/


// function userDate(url) {
//     const respons = fetch(url);
//     return respons.json();
    
// }


// console.log(userDate("https://reqres.in/"));





async function userData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Propagate the error further if needed
  }
}

// Example usage:
userData("https://reqres.in/api/users/1")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error in example usage:", error.message));














  async function fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }

  // Пример использования
  fetchData("https://reqres.in/")
    .then((data) => console.log(data))
    .catch((error) => console.error("Error in example usage:", error.message));
