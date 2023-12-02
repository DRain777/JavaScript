// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// Explain

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

console.log();

const items = Object.values(numbers);
console.log(items);

const sortNumbers = [];
for (let i = 0; i < items.length; i++) {
  if (items[i] >= 3) {
    sortNumbers.push(items[i]);
  }
}
console.log(sortNumbers);

// sortNumbers = [4, 5, 6, 7];
const keyin = "keyin";

const newArrayWithKeys = {};

for (let i = 0; i < sortNumbers.length; i++) {
  const key = `${keyin}${sortNumbers[i]}`;
  newArrayWithKeys[key] = sortNumbers[i];
}

console.log(newArrayWithKeys, ` значения которые больше или равны 3 `);

const post = {
  key1: 122,
  key2: 23,
  key3: 44,
  key4: 17,
  key5: -44,
  key6: 0,
  key7: 7,
};

for (const key in post) {
  if (post[key] >= 3) {
    console.log(post[key]);
  }
}
