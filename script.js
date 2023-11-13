const addition = function (a, b) {
	return a + b;
};

console.log(addition(2.5, 2));

const subtraction = function (a, b) {
	return a - b;
};

console.log(subtraction(2, 3));

const division = function (a, b) {
	return a / b;
};
console.log(division(2, 3));

const multiplication = function (a, b) {
	return a * b;
};

console.log(multiplication(100, 34));

function operate(firstNum, operand, secondNum) {
	return operand(firstNum, secondNum);
}

console.log(operate(2, addition, 3));
