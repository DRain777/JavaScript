// Необходимо получить список пользователей с сервера



async function fetchDataAndLog(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You might want to handle the error in a different way based on your requirements.  }
  }
}


 fetchDataAndLog("https:jsonplaceholder.typicode.com/users");
 console.log( fetchDataAndLog("https:jsonplaceholder.typicode.com/users"));



 function sort( funct) {
    
    
 }