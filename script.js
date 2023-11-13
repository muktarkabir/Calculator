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

clearButton.addEventListener("click", () => {
	display.textContent = 0;
});

deleteButton.addEventListener("click", () => {
	if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
	}
	if (display.textContent.length == 1) {
		display.textContent = 0;
	}
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNum = button.textContent;
		if (display.textContent == 0 && display.textContent.length == 1) {
			display.textContent = enteredNum;
		} else {
			display.textContent += enteredNum;
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
