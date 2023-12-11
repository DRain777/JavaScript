// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.
// Задание 3 (Пример )
// const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.getBalance()); // Вывод: 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}
BankAccount.bankName = "GBank";

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    throw new Error(`Insufficient funds in account " ${this.accountNumber} "`);
  }
  this.balance -= amount;
};
BankAccount.prototype.printBalance = function () {
  console.log(
    `${BankAccount.bankName} account " ${this.accountNumber}" balance${this.balance}  `
  );
};

const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.printBalance()); error

account1.printBalance();



// fix bag
function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

// Adding a property directly to the constructor (not in the prototype)
BankAccount.bankName = "GBank";

// Correcting the typo in the prototype assignment
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// Correcting the typo in the prototype assignment and handling insufficient funds
BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    throw new Error(`Insufficient funds in account "${this.accountNumber}"`);
  }
  this.balance -= amount;
};

// Correcting the typo in the prototype assignment
BankAccount.prototype.printBalance = function () {
  console.log(
    `${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`
  );
};

const account3 = new BankAccount("1234567890", 1000);
account3.printBalance(); // Correcting: Removed unnecessary console.log()
























function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Депозит на сумму ${amount} успешно выполнен. Новый баланс: ${this.balance}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    console.log(`Снятие средств на сумму ${amount} успешно выполнено. Новый баланс: ${this.balance}`);
  } else {
    console.log("Недостаточно средств на счете.");
  }
};

BankAccount.prototype.getBalance = function () {
  return this.balance;
};

// Example usage:
const account = new BankAccount("123456789", 1000);
console.log("Initial balance:", account.getBalance()); // Initial balance: 1000
account.deposit(500); // Депозит на сумму 500 успешно выполнен. Новый баланс: 1500
account.withdraw(700); // Снятие средств на сумму 700 успешно выполнено. Новый баланс: 800
account.withdraw(1000); // Недостаточно средств на счете.
console.log("Final balance:", account.getBalance()); // Final balance: 800
