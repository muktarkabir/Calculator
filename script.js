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
let theInput2 = 0;

let results = { output: 0, boolean: true };
let firstNumber = { value: 0, boolean: true };
let secondNumber = { value: 0, boolean: false };
let regex = /[0-9]\d+/;

let operand;

console.log(firstNumber.value);

clearButton.addEventListener("click", () => {
	display.textContent = 0;
	theInput = 0;
	theInput2 = 0;
	results.output = 0;
	results.boolean = true;
	firstNumber.boolean = true;
	secondNumber.boolean = false;
	firstNumber.value = 0;
	secondNumber.value = 0;
});

deleteButton.addEventListener("click", () => {
	if (display.textContent.length == 1) {
		display.textContent = 0;
		theInput = 0;
		theInput2 = 0;
		console.log(display.textContent);
	} else if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		if (firstNumber.boolean == true) {
			theInput = theInput.slice(0, -1);
		} else if (firstNumber.boolean == false) {
			theInput2 = theInput2.slice(0, -1);
		}

		console.log(display.textContent);
	}
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNumber = button.textContent;
		if (display.textContent == 0 && display.textContent.length == 1) {
			display.textContent = enteredNumber;
			if (firstNumber.boolean == true) {
				theInput = enteredNumber;
			} else if (firstNumber.boolean == false) {
				theInput2 = enteredNumber;
			}
			console.log(display.textContent);
		} else {
			display.textContent += enteredNumber;
			if (firstNumber.boolean == true) {
				theInput += enteredNumber;
			} else if (firstNumber.boolean == false) {
				theInput2 += enteredNumber;
			}
			console.log(display.textContent);
		}
		if (firstNumber.boolean == false && secondNumber.boolean == false) {
			display.textContent = display.textContent.replace(
				display.textContent,
				enteredNumber
			);
			secondNumber.boolean = true;
		}
	});
});

zeroButton.addEventListener("click", () => {
	if (display.textContent == 0 && display.textContent.length == 1) {
	} else {
		display.textContent += 0;
		if (firstNumber.boolean == true) {
			theInput += 0;
		} else if (secondNumber.boolean == true) {
			theInput2 += 0;
		}
		console.log(display.textContent);
	}
});

decimalPointButton.addEventListener("click", () => {
	if (display.textContent.includes(".")) {
	} else {
		display.textContent += ".";
		if (firstNumber.boolean == true) {
			theInput += ".";
		} else if (secondNumber.boolean == true) {
			theInput2 += ".";
		}
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

function operate(a, operand, b) {
	return operand(a, b);
}

plusButton.addEventListener("click", () => {
	firstNumber.value = Number(theInput);
	firstNumber.boolean = false;
	operand = addition;
	console.log(firstNumber);
});

minusButton.addEventListener("click", () => {
	firstNumber.value = Number(theInput);
	firstNumber.boolean = false;
	operand = subtraction;
});

timesButton.addEventListener("click", () => {
	firstNumber.value = Number(theInput);
	firstNumber.boolean = false;
	operand = multiplication;
});

divideButton.addEventListener("click", () => {
	firstNumber.value = Number(theInput);
	firstNumber.boolean = false;
	operand = division;
});

equalSignButton.addEventListener("click", () => {
	if (firstNumber.boolean == false && secondNumber.boolean == true) {
		secondNumber.value = Number(theInput2);
		if (operand == division && secondNumber.value == 0) {
			display.textContent = "we dont do that here";
		} else {
			results.output = operate(firstNumber.value, operand, secondNumber.value);
			display.textContent = results.output;
			console.log(results.output);
		}
	}
});

let testresults = operate(7, multiplication, 900);
test.textContent = testresults.toString(16);
