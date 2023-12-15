// Обьект -> JSON
const student = {
  name: "Slava",
  surname: "belkin",
  age: 20,
  practice: {
    place: "iktg",
    hours: 47,
  },
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. ВСЕ КЛЮЧИ СТАЛИ ОБВЕРНУТЫ В КАВЫЧКИ!!!.
// {
//     "name": "Slava",
//     "surname": "belkin",
//     "age": 20,
//     "practice": {
//         "place": "iktg",
//         "hours": 47
//     }
// }
//  В таком формате придет на бэкенд

console.log(
  JSON.parse(`{
    "name": "Slava",     "surname": "belkin",
     "age": 20,
    "practice": {
        "place": "iktg",
        "hours": 47
}}`)
);

// плоучаем обьект

// {
//   name: 'Slava',
//   surname: 'belkin',
//   age: 20,
//   practice: { place: 'iktg', hours: 47 }
// }

console.log(JSON.parse('["belkin","ivanov","petrov"]')); 
//[ 'belkin', 'ivanov', 'petrov' ] получим

