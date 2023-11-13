const display = document.querySelector(".input-output");
display.textContent = "";

const clearButton = document.querySelector(".c");

clearButton.addEventListener("click", () => {
	display.textContent = "";
});
const deleteButton = document.querySelector(".d");

const numberDiv = document.querySelector(".numbers");
const numberDivButtons = numberDiv.querySelectorAll("button");

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		let enteredNum = button.textContent;
		display.textContent += enteredNum;
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
