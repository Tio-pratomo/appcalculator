const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = function (number) {
	calculatorScreen.value = number;
}

numbers.forEach((number) => {
	number.addEventListener('click',(event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = function (number) {
	if (currentNumber === '0') {
		currentNumber = number;
	}
	else {
		currentNumber += number;
	}
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener('click',(event) => {
		inputOperator(event.target.value);
	})
})

const inputOperator = function (operator) {
	if (calculationOperator === ''){
		prevNumber = currentNumber;	
	}
	calculationOperator = operator;
	currentNumber = '';
}

const equalSign = document.querySelector('.equal-sign');

const calculate = function () {
	let result = '';
	switch (calculationOperator) {
		case '+':
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break
		case '-':
			result = prevNumber - currentNumber;
			break
		case '*':
			result = prevNumber * currentNumber;
			break
		case '/':
			result = prevNumber / currentNumber;
			break
		case '%':
			result = prevNumber * (currentNumber / 100);
			break
		default:
			return
	}

	currentNumber = result;
	calculationOperator = '';
}

equalSign.addEventListener('click',() => {
	calculate();
	updateScreen(currentNumber);
})

const clearBtn = document.querySelector('.all-clear');

const clearAll = function () {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}

clearBtn.addEventListener('click',() => {
	clearAll();
	updateScreen(currentNumber);
})

const decimal = document.querySelector('.decimal')

inputDecimal = function (dot) {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot;
}

decimal.addEventListener ('click',(event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    percentageNumber(event.target.value);
    updateScreen(currentNumber);
});


const percentageNumber = () => {
    if (currentNumber === '0') {
        return;
    }
    currentNumber = currentNumber / 100;
}