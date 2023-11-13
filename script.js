const display = document.querySelector(".input-output");
display.textContent = "2332445";

const clearButton = document.querySelector(".c");
clearButton.addEventListener("click", () => {
	display.textContent = "";
});
const deleteButton = document.querySelector(".d");

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

console.log(operate(2, addition, 3));
