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
const equalSignButton = document.querySelector(".equal-sign button");

let theInput = 0;

clearButton.addEventListener("click", () => {
	display.textContent = 0;
	theInput = 0;
});

deleteButton.addEventListener("click", () => {
	if (display.textContent.length == 1) {
		display.textContent = 0;
		theInput = 0;
	} else if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		theInput = theInput.slice(0, -1);
	}
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNum = button.textContent;
		if (display.textContent == 0 && display.textContent.length == 1) {
			display.textContent = enteredNum;
			theInput = enteredNum;
		} else {
			display.textContent += enteredNum;
			theInput += enteredNum;
		}
	});
});

zeroButton.addEventListener("click", () => {
	if (display.textContent == 0 && display.textContent.length == 1) {
	} else {
		display.textContent += 0;
	}
});
decimalPointButton.addEventListener("click", () => {
	if (display.textContent.includes(".")) {
	} else {
		display.textContent += decimalPointButton.textContent;
		theInput += ".";
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

let firstNum, operand, secondNum;

function operate(firstNum, operand, secondNum) {
	return operand(firstNum, secondNum);
}
