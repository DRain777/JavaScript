" user strict";

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
    const arr = [];
    let newObj = Object.getPrototypeOf(obj);
    while (newObj !== null) {
        arr.push(newObj);
         newObj = Object.getPrototypeOf(newObj);
        
       

    }
    return arr;
    


}
// getPrototypeChain(obj);
const object =[];
console.log(getPrototypeChain(object));



// function getPrototypeChain(obj) {
//   const prototypeChain = [];
//   let currentObj = obj;

//   while (currentObj !== null) {
//     prototypeChain.push(currentObj);
//     currentObj = Object.getPrototypeOf(currentObj);
//   }

//   return prototypeChain;
// }

// // Example usage:
// const exampleObj = {}; // Replace this with your object
// const chain = getPrototypeChain(exampleObj);
// console.log(chain);















// function getPrototypeChain(obj) {
//   const prototypeChain = [];

//   for (
//     let currentObj = obj;
//     currentObj !== null;
//     currentObj = Object.getPrototypeOf(currentObj)
//   ) {
//     prototypeChain.push(currentObj);
//   }

//   return prototypeChain;
// }

// // Example usage:
// const exampleObj = {}; // Replace this with your object
// const chain = getPrototypeChain(exampleObj);
// console.log(chain);
