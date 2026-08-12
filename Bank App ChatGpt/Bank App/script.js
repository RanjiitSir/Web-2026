function BankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        Deposit: (amount) => {
            balance += amount;
            return { amount: amount, balance: balance };
        },

        Withdraw: (amount) => {
            if (amount > balance) {
                return {
                    success: false,
                    amount: amount,
                    balance: balance,
                    message: "Insufficient balance."
                };
            }

            balance -= amount;

            return {
                success: true,
                amount: amount,
                balance: balance
            };
        },

        GetBalance: () => balance
    };
}

let User1 = BankAccount(1000);
let User2 = BankAccount(5000);

let transactions = [];

function formatMoney(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function updateBalances() {
    document.getElementById("user1Balance").textContent =
        formatMoney(User1.GetBalance());

    document.getElementById("user2Balance").textContent =
        formatMoney(User2.GetBalance());
}

function depositMoney(userNumber) {
    let input;
    let account;

    if (userNumber === 1) {
        input = document.getElementById("user1Amount");
        account = User1;
    } else {
        input = document.getElementById("user2Amount");
        account = User2;
    }

    let amount = Number(input.value);

    if (!amount || amount <= 0) {
        showMessage("Please enter a valid amount.", "error");
        return;
    }

    let result = account.Deposit(amount);

    addTransaction(userNumber, "Deposit", amount, result.balance);
    updateBalances();

    showMessage(
        `₹${amount.toLocaleString("en-IN")} credited successfully.`,
        "success"
    );

    input.value = "";
}

function withdrawMoney(userNumber) {
    let input;
    let account;

    if (userNumber === 1) {
        input = document.getElementById("user1Amount");
        account = User1;
    } else {
        input = document.getElementById("user2Amount");
        account = User2;
    }

    let amount = Number(input.value);

    if (!amount || amount <= 0) {
        showMessage("Please enter a valid amount.", "error");
        return;
    }

    let result = account.Withdraw(amount);

    if (!result.success) {
        showMessage("Insufficient balance.", "error");
        return;
    }

    addTransaction(userNumber, "Withdraw", amount, result.balance);
    updateBalances();

    showMessage(
        `₹${amount.toLocaleString("en-IN")} withdrawn successfully.`,
        "success"
    );

    input.value = "";
}

function addTransaction(userNumber, type, amount, balance) {
    transactions.unshift({
        user: `User ${userNumber}`,
        type: type,
        amount: amount,
        balance: balance,
        time: new Date()
    });

    renderTransactions();
}

function renderTransactions() {
    const tableBody = document.getElementById("transactionBody");
    tableBody.innerHTML = "";

    if (transactions.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">
                    No transactions yet
                </td>
            </tr>
        `;
        return;
    }

    transactions.forEach(transaction => {
        const row = document.createElement("tr");

        const transactionClass =
            transaction.type === "Deposit" ? "credit" : "debit";

        const sign =
            transaction.type === "Deposit" ? "+" : "-";

        row.innerHTML = `
            <td>${transaction.user}</td>
            <td class="${transactionClass}">${transaction.type}</td>
            <td class="${transactionClass}">
                ${sign}${formatMoney(transaction.amount)}
            </td>
            <td>${formatMoney(transaction.balance)}</td>
            <td>${transaction.time.toLocaleTimeString()}</td>
        `;

        tableBody.appendChild(row);
    });
}

function showMessage(text, type) {
    const message = document.getElementById("message");

    message.textContent = text;
    message.className = `message ${type}`;

    setTimeout(() => {
        message.className = "message hidden";
    }, 3000);
}

function clearHistory() {
    transactions = [];
    renderTransactions();
}

updateBalances();
renderTransactions();
