// У вас есть список задач, которые необходимо выполнить в определенное 
// порядке, Каждая задача должна быть выполнена через определенныц промежуток времени ,
// заданный в миллисекундах,Вам необходимо написать фнкцию,которая применяет список задач
// и интнрвал времени,а затем выполняет каждую задачу через определенный промежуток времени.


const tasks = [
    {name: 'task1', time:1000},
    {name: 'task2', time:2000},
    {name: 'task3', time:3000},
    {name: 'task4', time:4000},
    {name: 'task5', time:5000},
];

// function timeOut(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const { name,time } = arr[i]; // из массива достаем что лежит под индексом i 
//         setTimeout( () => {
//             console.log(name);
//         },time);
        
        
//     }
    
// }

// timeOut(tasks);




let i = 0;
function arrTask(array) {
    const { name, time } = array[i];
     setTimeout(() => {
       console.log(name);
       i++;
       if(i< array.length) {
        arrTask(array);
       }
     }, time);


    
}

 arrTask(tasks);