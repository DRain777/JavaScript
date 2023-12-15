async function fetchDataFromReqres() {
  const apiUrl = "https://reqres.in/api/users";

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch data from Reqres");
    }
  } catch (error) {
    console.error(error.message);
    throw error; // Propagate the error further if needed
  }
}

// Example usage
fetchDataFromReqres()
  .then((data) => {
    console.log("Data from Reqres:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
