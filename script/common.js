function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInputNumber(id) {
    return Number(document.getElementById(id).value);
}

function getElementNumber(id) {
    return Number(document.getElementById(id).innerText);
}

function setElementValue(id, value) {
    document.getElementById(id).innerText = value;
}

function showOnly(id){

    const addMoney = document.getElementById("add-money")
    const cashout = document.getElementById("cashout")

    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")

    const selected = document.getElementById(id)
    selected.classList.remove("hidden")
}