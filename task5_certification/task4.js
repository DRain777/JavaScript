
// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// ```
const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

// []()
// []()




console.log(products[0].photos);
console.log(products[2].photos);










const result = products.filter((product) => {
  return "photos" in product && product.photos.length > 0;
});
console.log(result);






// Products.filter() используется для создания нового массива на основе условия, указанного в функции обратного вызова.

// Функция обратного вызова (product) => {...} применяется к каждому элементу массива продуктов в процессе фильтрации.

// «photos» в продукте проверяет, существует ли свойство с именем «photos» в текущем объекте продукта. Если это так, эта часть оценивается как истина; в противном случае это ложь.

// Product.photos.length > 0 проверяет, является ли свойство photos массивом хотя бы с одним элементом.

// Сочетание этих условий с && (логическое И) гарантирует, что товар будет включен в отфильтрованный результат только в том случае, если у него есть свойство «фотографии», и это свойство представляет собой массив, содержащий хотя бы один элемент.

// Полученный массив сохраняется в переменной result.



// const result2 = products
//   .filter((product) => product.photos && product.photos.length > 0)
//   .map((product) => product.photos);

// console.log(result2);
