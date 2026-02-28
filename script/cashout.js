document.getElementById("cashout-btn").addEventListener("click", function () {

    const agentNumber = document.getElementById("agent-number").value;
    const amount = Number(document.getElementById("cashout-amount").value);
    const pin = document.getElementById("password-input").value;

    const balanceElement = document.getElementById("balance");
    const currentBalance = Number(balanceElement.innerText);

    // Basic validation
    if (!agentNumber || !amount || amount <= 0) {
        alert("Please enter valid information.");
        return;
    }

    if (pin !== "admin123") {
        alert("Incorrect Pin");
        return;
    }

    if (amount > currentBalance) {
        alert("Insufficient Balance");
        return;
    }

    const newBalance = currentBalance - amount;
    balanceElement.innerText = newBalance;

    alert("Cashout Successful.");
});