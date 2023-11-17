Filename: complexCode.js

/**
 * This code demonstrates a complex implementation of a banking system, which includes multiple classes and advanced functionalities.
 * The code includes user authentication, account management, transaction handling, and more.
 * Feel free to modify and enhance it according to your specific requirements.
 */

// User class representing a bank customer
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.accounts = [];
  }

  createAccount(accountType) {
    const account = new Account(accountType);
    this.accounts.push(account);
    return account;
  }

  authenticate(password) {
    return this.password === password;
  }
}

// Account class representing a bank account
class Account {
  constructor(type) {
    this.type = type;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} into your ${this.type} account.`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from your ${this.type} account.`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}

// Transaction class representing a bank transaction
class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
  }

  execute() {
    if (this.sender.balance >= this.amount) {
      this.sender.balance -= this.amount;
      this.receiver.balance += this.amount;
      console.log(`Transaction of ${this.amount} completed successfully.`);
    } else {
      console.log("Insufficient funds to execute the transaction.");
    }
  }
}

// Example usage:

// Create users
const john = new User("John Doe", "john.doe@example.com", "123456");
const jane = new User("Jane Smith", "jane.smith@example.com", "789012");

// Create accounts
const johnSavingsAccount = john.createAccount("Savings");
const janeCheckingAccount = jane.createAccount("Checking");

// Make transactions
const transaction1 = new Transaction(johnSavingsAccount, janeCheckingAccount, 100);
transaction1.execute();

const transaction2 = new Transaction(janeCheckingAccount, johnSavingsAccount, 50);
transaction2.execute();

// Display final account balances
console.log(`John's ${johnSavingsAccount.type} account balance: $${johnSavingsAccount.balance}`);
console.log(`Jane's ${janeCheckingAccount.type} account balance: $${janeCheckingAccount.balance}`);
