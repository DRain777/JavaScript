function sumDigits(number) {
  // Convert the number to a string to iterate over its digits
  // Преобразуйте число в строку для перебора его цифр.
  const digits = String(number);

  // Base case: if there's only one digit, return that digit
  // Базовый случай: если есть только одна цифра, вернуть эту цифру
  if (digits.length === 1) {
    return parseInt(digits);
  }

  // Recursive case: sum the current digit with the sum of the rest of the digits
  // Рекурсивный случай: суммируем текущую цифру с суммой остальных цифр
  return parseInt(digits[0]) + sumDigits(parseInt(digits.slice(1)));
}

// Example usage:
// Пример использования:
console.log(sumDigits(123)); // Expected: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Expected: 39 (4 + 5 + 6 + 7 + 8 + 9)



function sumDigits1(number) {
    if(number < 10){
    return number;
    }
    return (number % 10 )+sumDigits1(Math.trunc(number / 10));
}



console.log(sumDigits(1237)); // Expected: 6 (1 + 2 + 3)
console.log(sumDigits(4567899999));