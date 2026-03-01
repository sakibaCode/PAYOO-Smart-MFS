document.getElementById("add-money-btn").addEventListener("click", function () {

    const bankName = getInputValue("add-money-bank");
    if (bankName === "Select a Bank") {
        alert("Select a Bank");
        return;
    }

    const accountNumber = getInputValue("bank-account-number");
    if (accountNumber.length != 11) {
        alert("Invalid Account Number");
        return;
    }

    const amountToAdd = getInputNumber("add-amount");
    if (amountToAdd <= 0) {
        alert("Invalid Amount");
        return;
    }

    const pin = getInputValue("add-money-pin");
    if (pin !== "admin123") {
        alert("Incorrect Pin");
        return;
    }

    const currentBalance = getElementNumber("balance");
    setElementValue("balance", currentBalance + amountToAdd);

    alert("Add Money Successful.");

    document.getElementById("add-amount").value = "";
    document.getElementById("bank-account-number").value = "";
});