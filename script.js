let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = displayValue;
}
