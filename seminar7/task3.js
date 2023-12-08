// Создаем бычную функцию add , Которая будет складывть this.a  и this.b и возвращать значение, 
// которое получим.   Содать обьект в котором будут своства "a" и "b" , со значениями в виде 
// чисел (любые значения).
// Необходимо взять функцию add так , чтобы она правельно отработала с нашим обьектом.  
function add() {
    return this.a + this.b;
    
}
const obj = {
    a: 5,
    b: 10,
    c: 7,
}
// call - позвать!!!!

// console.log(add.call(obj));
// // applay - применить


// console.log(add.apply(obj));




function add2(c,d) {
  return this.a + this.b + c + d ;
}
console.log(add2.call(obj,2,3));

console.log(add2.apply(obj,[2,3]));// разница между методами как передаются аргументы


 const result = add2.bind(obj, 2, 3);
 console.log(result(2,3));




