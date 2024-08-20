// script.js
let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function appendDecimal() {
    let current = display.value;
    if (current.length === 0 || isNaN(current[current.length - 1])) {
        display.value += '0.';
    } else if (current.indexOf('.') === -1) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
