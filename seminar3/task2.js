// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.
// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// 1. Дана фукнция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();



function func(num = 5) {
 console.log(num * num);
};

func(2); // 4
func(3);// 9
func(); // 5


function   sumNumber (num1, num2, num3) {
    if (num3 === undefined){
    return num1 + num2;
    } else{

        return sumNumber( num1 + num2,num3);
    }
    
}


console.log(sumNumber(5,5,5));