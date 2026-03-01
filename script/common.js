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