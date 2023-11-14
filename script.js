const display = document.querySelector(".input-output");
const clearButton = document.querySelector(".c");
const deleteButton = document.querySelector(".d");
const numberDiv = document.querySelector(".numbers");
const numberDivButtons = numberDiv.querySelectorAll("button");
const zeroButton = document.querySelector(".zero button");
const decimalPointButton = document.querySelector(".decimal-point button");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const timesButton = document.querySelector(".times");
const divideButton = document.querySelector(".divide");
const equalSignButton = document.querySelector(".equal-sign > button");
const test = document.querySelector("h2");

let theInput = 0;

let firstNumber = { value: 0, boolean: true },
	operand,
	secondNumber = { value: 0, boolean: false };
let regex = /[0-9]\d+/;

console.log(firstNumber.value);

clearButton.addEventListener("click", () => {
	display.textContent = 0;
	theInput = 0;
});

deleteButton.addEventListener("click", () => {
	if (display.textContent.length == 1) {
		display.textContent = 0;
		theInput = 0;
		console.log(display.textContent);
	} else if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		theInput = theInput.slice(0, -1);
		console.log(display.textContent);
	}
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNumber = button.textContent;
		if (display.textContent == 0 && display.textContent.length == 1) {
			display.textContent = enteredNumber;
			theInput = enteredNumber;
			console.log(display.textContent);
		} else {
			display.textContent += enteredNumber;
			theInput += enteredNumber;
			console.log(display.textContent);
		}
		if (firstNumber.boolean == false && secondNumber.boolean == false) {
			display.textContent = display.textContent.replace(regex, enteredNumber);
			secondNumber.boolean = true;
		}
	});
});

console.log(firstNumber == Number(theInput));

zeroButton.addEventListener("click", () => {
	if (display.textContent == 0 && display.textContent.length == 1) {
	} else {
		display.textContent += 0;
		theInput += 0;
		console.log(display.textContent);
	}
});

decimalPointButton.addEventListener("click", () => {
	if (display.textContent.includes(".")) {
	} else {
		display.textContent += ".";
		theInput += ".";
		console.log(display.textContent);
	}
});

const addition = function (a, b) {
	return a + b;
};

const subtraction = function (a, b) {
	return a - b;
};

const division = function (a, b) {
	return a / b;
};

const multiplication = function (a, b) {
	return a * b;
};

function operate(firstNumber, operand, secondNumber) {
	return operand(firstNumber, secondNumber);
}

plusButton.addEventListener("click", () => {
	firstNumber.value = Number(theInput);
	firstNumber.boolean = false;
	operand = addition;
	console.log(firstNumber);
});

minusButton.addEventListener("click", () => {
	operand = subtraction;
});

timesButton.addEventListener("click", () => {
	operand = multiplication;
});

divideButton.addEventListener("click", () => {
	operand = division;
});

let testresults = operate(7, multiplication, 900);
test.textContent = testresults.toString(16);
