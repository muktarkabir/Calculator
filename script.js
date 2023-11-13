const display = document.querySelector(".input-output");
const clearButton = document.querySelector(".c");
const deleteButton = document.querySelector(".d");
const numberDiv = document.querySelector(".numbers");
const numberDivButtons = numberDiv.querySelectorAll("button");
const symbolsDivButtons = document.querySelectorAll(".symbols button");
const zeroButton = document.querySelector(".zero button");
const decimalPointButton = document.querySelector(".decimal-point button");
const equalsSignButton = document.querySelector(".equals-sign button");

zeroButton.addEventListener("click", () => {
	display.textContent += 0;
});

decimalPointButton.addEventListener("click", () => {
	display.textContent += decimalPointButton.textContent;
});

clearButton.addEventListener("click", () => {
	display.textContent = "";
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNum = button.textContent;
		display.textContent += enteredNum;
	});
});

symbolsDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredSymbol = button.textContent;
		display.textContent += enteredSymbol;
	});
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
