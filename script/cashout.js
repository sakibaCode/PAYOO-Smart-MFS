document.getElementById("cashout-btn").addEventListener("click", function () {

    const agentNumber = getInputValue("agent-number");
    const amount = getInputNumber("cashout-amount");
    const pin = getInputValue("password-input");
    const currentBalance = getElementNumber("balance");

    if (!agentNumber || amount <= 0) {
        alert("Invalid input");
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

    setElementValue("balance", currentBalance - amount);
    alert("Cashout Successful.");
});