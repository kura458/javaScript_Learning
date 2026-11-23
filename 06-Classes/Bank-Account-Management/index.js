
/*
 * BANK ACCOUNT MANAGEMENT SYSTEM
 * --------------------------------
 * A simple JavaScript application demonstrating:
 * 1. Classes and constructors
 * 2. Object properties and methods
 * 3. Array manipulation
 * 4. Filtering and mapping
 * 5. Deposits and withdrawals
 * 6. Transaction history
 */

class BankAccount {
  // Initialize a new bank account
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Deposit money into the account
  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({
      type: "deposit",
      amount: amount
    });

    this.balance += amount;

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  // Withdraw money from the account
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({
      type: "withdraw",
      amount: amount
    });

    this.balance -= amount;

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  // Display the current account balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // Display all deposit transactions
  listAllDeposits() {
    const deposits = this.transactions
      .filter(transaction => transaction.type === "deposit")
      .map(transaction => transaction.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  // Display all withdrawal transactions
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(transaction => transaction.type === "withdraw")
      .map(transaction => transaction.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// ======================================
// CREATE AND TEST A BANK ACCOUNT
// ======================================

const myAccount = new BankAccount();

// Deposit transactions
myAccount.deposit(500);
myAccount.deposit(200);
myAccount.deposit(100);

// Withdrawal transactions
myAccount.withdraw(100);
myAccount.withdraw(50);

// ======================================
// DISPLAY ACCOUNT INFORMATION
// ======================================

console.log("================================");
console.log("     BANK ACCOUNT SUMMARY");
console.log("================================");

console.log(myAccount.checkBalance());

console.log("--------------------------------");
console.log(myAccount.listAllDeposits());

console.log("--------------------------------");
console.log(myAccount.listAllWithdrawals());

console.log("--------------------------------");
console.log("Total transactions:", myAccount.transactions.length);

console.log("================================");
