//  * Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета,
// withdraw(amount) для снятия денег со счета и метод printBalance,
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое
// содержит название банка.

// Недостаточно средств на счете "1234567890" Insufficient funds in account "1234567890"
// Неверная сумма депозита. Должно быть положительное число.  Wrong deposit amount, must be a positive number.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// account1.printBalance(); // GBank account "1234567890" balance: 1300
//  */

// class BankAccount {
//   static bankName = "GBank";
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     if (!Number.isFinite(amount) || amount <= 0) {
//       // &&

//       console.log();
//     } else {
//       this.balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log(" Wrong deposit amount, must be a positive number");
//     } else if (this.balance < amount) {
//       console.log(` Insufficient funds in account  ${this.accountNumber} `);
//     } else {
//       this.balance -= amount;
//     }
//   }

//   printBalance() {
//     console.log(
//       ` ${BankAccount.bankName}  account  ${this.accountNumber} balance:${this.balance} `
//     );
//   }
// }



// function validatorMoney(amount) {
//   if (!Number.isFinite(amount) || amount <= 0) {
//     throw new Error("Wrong deposit amount, must be a positive number.");
//   }
//   if ((amount % 1).toString().length > 4) {
//     throw new Error("Wrong money format");
//   }
// }

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// account1.printBalance(); // GBank account "1234567890" balance: 1300












class BankAccount {
    static bankName = "GBank";
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        validateMoney(amount);
        this.balance += amount;
    }
    withdraw(amount) {
        validateMoney(amount);
        if (this.balance < amount) {
            throw new Error(`Insufficient funds in account ${this.accountNumber}`);
        }
        this.balance -= amount;
    }
    printBalance() {
        console.log(`${BankAccount.bankName} account ${this.accountNumber} balance: ${this.balance}`);
    }
}

function validateMoney(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error('Wrong deposit amount, must be a positive number.');
    }
    if ((amount % 1).toString().length > 4) {
        throw new Error('Wrong money format');
    }
}

const account1 = new BankAccount("1234567890", 1000);
// console.log(account1);
account1.deposit(500);
account1.withdraw(200);
 account1.withdraw(1500); // Insufficient funds in account "1234567890"
 account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
 account1.deposit(-500); // Wrong deposit amount, must be a positive number.
 account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance(); // GBank account "1234567890" balance: 1300
