// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.
let num = 1;
let count = 0;
while (num <= 1000) {
    num *= 3;
    count++;
    
}
console.log(num);
console.log(count);