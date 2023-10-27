/** 
 * FILENAME: sophisticated_code_example.js
 * 
 * DESCRIPTION:
 * This code demonstrates a complex and sophisticated example that showcases the implementation of various advanced JavaScript concepts and techniques.
 * The code creates a simulation of a bank account management system, including account creation, transaction handling, and balance tracking.
 * 
 * DISCLAIMER: This code is for illustrative purposes only. It may not be applicable or optimized for real-world scenarios.
 */

// Define the Bank class
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  // Method to create a new account
  createAccount(accountNumber) {
    if (this.getAccount(accountNumber)) {
      console.log(`Account ${accountNumber} already exists.`);
      return;
    }

    const newAccount = new Account(accountNumber);
    this.accounts.push(newAccount);

    console.log(`Account ${accountNumber} created successfully.`);
  }

  // Method to retrieve an account by its account number
  getAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  // Method to perform a transaction on an existing account
  performTransaction(accountNumber, amount, transactionType) {
    const account = this.getAccount(accountNumber);
    if (!account) {
      console.log(`Account ${accountNumber} does not exist.`);
      return;
    }

    if (transactionType === 'deposit') {
      account.deposit(amount);
    } else if (transactionType === 'withdraw') {
      account.withdraw(amount);
    } else if (transactionType === 'transfer') {
      // This condition is simply for demonstration purposes
      console.log('Transfer functionality not implemented.');
      return;
    } else {
      console.log(`Invalid transaction type: ${transactionType}`);
      return;
    }

    console.log(`Transaction completed: ${transactionType} $${amount} into Account ${accountNumber}`);
  }
}

// Define the Account class
class Account {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient balance in Account ${this.accountNumber}`);
    }
  }
}

// Usage

// Create a new bank instance
const myBank = new Bank('My Bank');

// Create two accounts
myBank.createAccount(1001);
myBank.createAccount(1002);

// Perform transactions on the accounts
myBank.performTransaction(1001, 500, 'deposit');
myBank.performTransaction(1001, 200, 'withdraw');
myBank.performTransaction(1002, 1000, 'deposit');
myBank.performTransaction(1002, 3000, 'withdraw');

// Attempt transactions on non-existing account
myBank.performTransaction(1003, 100, 'deposit');

// Try to deposit into an account that doesn't exist
myBank.performTransaction(9999, 100, 'deposit');

// Output the account balance
console.log('Account Balances:');
myBank.accounts.forEach(account => {
  console.log(`Account ${account.accountNumber}: $${account.balance}`);
});