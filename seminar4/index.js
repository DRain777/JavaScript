// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.



const myArray = [1,2,3,'rich']
// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
    
    
// }


// for (const i of myArray) {
//     console.log(i);
    
// }



myArray.forEach((( el,i, arr) => {
    console.log(el,i,arr);
    
}));