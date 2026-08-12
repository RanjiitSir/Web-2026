# Bank Account Manager

A simple frontend banking practice application demonstrating JavaScript functions, objects, closures, private state, and array-based transaction history.

## Files

- `index.html` - application UI
- `style.css` - responsive styling
- `script.js` - bank account logic and UI behavior

## How to run

Open `index.html` directly in a modern browser.

No server or installation is required.

## Features

- Two independent bank accounts
- Private balance using JavaScript closure
- Deposit
- Withdraw
- Insufficient-balance validation
- Current balance display
- Transaction history
- Clear transaction history
- Responsive design

## Initial balances

- User 1: ₹1,000
- User 2: ₹5,000

## Important concept

`BankAccount()` keeps `balance` private:

```js
function BankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        Deposit: (amount) => {
            balance += amount;
            return balance;
        },
        Withdraw: (amount) => {
            balance -= amount;
            return balance;
        },
        GetBalance: () => balance
    };
}
```

The returned functions form a closure over `balance`, so outside code cannot directly access the variable.
