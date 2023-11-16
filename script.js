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

let theInput = "";
let theInput2 = "";

let results = { output: 0, boolean: true };
let firstNumber = { value: 0, boolean: true };
let secondNumber = { value: 0, boolean: false };
let operand = null;

clearButton.addEventListener("click", () => {
	display.textContent = "0";
	theInput = "";
	theInput2 = "";
	results.output = 0;
	results.boolean = true;
	firstNumber.boolean = true;
	secondNumber.boolean = false;
	firstNumber.value = 0;
	secondNumber.value = 0;
	operand = null;
});

deleteButton.addEventListener("click", () => {
	if (display.textContent.length == 1 && display.textContent !== "0") {
		display.textContent = "0";
		theInput = "";
		theInput2 = "";
	} else if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		if (firstNumber.boolean == true) {
			theInput = theInput.slice(0, -1);
		} else if (firstNumber.boolean == false) {
			theInput2 = theInput2.slice(0, -1);
		}
	}
	if (
		display.textContent.includes("a") ||
		(display.textContent.includes("i") && display.textContent.length > 1)
	) {
		display.textContent = "0";
		theInput = "";
		theInput2 = "";
		results.output = 0;
		results.boolean = true;
		firstNumber.boolean = true;
		secondNumber.boolean = false;
		firstNumber.value = 0;
		secondNumber.value = 0;
		operand = null;
	}
});

numberDivButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (display.textContent.length < 13) {
			let enteredNumber = button.textContent;
			if (display.textContent == "0" && display.textContent.length == 1) {
				display.textContent = enteredNumber;
				if (firstNumber.boolean == true) {
					theInput = enteredNumber;
				} else if (firstNumber.boolean == false) {
					theInput2 = enteredNumber;
				}
			} else {
				display.textContent += enteredNumber;
				if (firstNumber.boolean == true) {
					theInput += enteredNumber;
				} else if (firstNumber.boolean == false) {
					theInput2 += enteredNumber;
				}
			}
			if (firstNumber.boolean == false && secondNumber.boolean == false) {
				display.textContent = display.textContent.replace(
					display.textContent,
					enteredNumber
				);
				secondNumber.boolean = true;
			}
		}
	});
});

zeroButton.addEventListener("click", () => {
	if (display.textContent == "0" && display.textContent.length == 1) {
	} else if (display.textContent.length < 13) {
		display.textContent += "0";
		if (firstNumber.boolean == true) {
			theInput += "0";
		} else if (secondNumber.boolean == true) {
			theInput2 += "0";
		}
		if (firstNumber.boolean == false && secondNumber.boolean == false) {
			display.textContent = display.textContent.replace(
				display.textContent,
				"0"
			);
			secondNumber.boolean = true;
		}
	}
});

decimalPointButton.addEventListener("click", () => {
	if (display.textContent.includes(".")) {
	} else if (display.textContent.length < 13) {
		display.textContent += ".";
		if (firstNumber.boolean == true) {
			theInput += ".";
		} else if (secondNumber.boolean == true) {
			theInput2 += ".";
		}
	}
});

const addition = function (a, b) {
	return a + b;
};
const subtraction = function (a, b) {
	return a - b;
};
const division = function (a, b) {
	if (b != 0) {
		return a / b;
	} else {
		let errors = ["haha", "impossible", "i can't do it"];
		return errors[Math.floor(Math.random() * 3)];
	}
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
		results.output = operate(firstNumber.value, operand, secondNumber.value);
		let displayed = results.output.toString();
		if (displayed.length > 13) {
			displayed = displayed.slice(0, 13);
		}
		display.textContent = displayed;
		if (typeof results.output == "string") {
			return (results.output = 0);
		}
	}
});

let testresults = operate(7, multiplication, 900);
test.textContent = testresults.toString(16);
