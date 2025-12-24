// Advanced example: BankAccount with validation in setter and computed balance in getter
class BankAccount {
    constructor(owner, initialBalance) {
        this.owner = owner;
        this._balance = initialBalance;
        this._transactions = [];
    }

    get balance() {
        // Returns the current balance after all transactions
        return this._transactions.reduce((acc, t) => acc + t, this._balance);
    }

    set deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit must be positive');
        }
        this._transactions.push(amount);
    }

    set withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal must be positive');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this._transactions.push(-amount);
    }
}

// Usage
const acc = new BankAccount('Alice', 1000);
acc.deposit = 500;
acc.withdraw = 200;
console.log(acc.balance); // 1300
