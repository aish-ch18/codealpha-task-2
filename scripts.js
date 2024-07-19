// script.js

let display = document.getElementById('display');
let currentInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    display.textContent = value;
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
    } catch {
        updateDisplay('Error');
        currentInput = '';
    }
}
