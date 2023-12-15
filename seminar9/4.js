// async / await

async function loadData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(await response.json());
    } else {
      console.log(await response.text());
    }
  } catch (Error) {
    console.log(Error);
  }
}
loadData("https://reqres.in/");
// console.log(loadData("https://reqres.in/"));


