const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');


let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    // if current display is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = (displayValue === '0') ? number : displayValue + number;
}


function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign FirstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    }
    operatorValue = operator;
}

function addDecimal() {
    // if no decimal add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

// Add Event Listener for Numbers, Operators, Decimal Button
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
        return
    } else if  (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }  else if  (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', addDecimal);
    }
})

// Reset display
function resetAll() {
    calculatorDisplay.textContent = '0';
     firstValue = 0;
     operatorValue = ''; 
     awaitingNextValue = false;
}

clearBtn.addEventListener('click', resetAll);