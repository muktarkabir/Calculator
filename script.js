const display = document.querySelector(".input-output");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const numberContainer = document.querySelector(".numbers");
const oneToNineButtons = numberContainer.querySelectorAll("button");
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
let buttonsOn = true;

function resetCalculator() {
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
	buttonsOn = true;
}

clearButton.addEventListener("click", resetCalculator);

deleteButton.addEventListener("click", () => {
	if (
		(display.textContent.length == 1 && display.textContent !== "0") ||
		display.textContent.includes("a") ||
		display.textContent.includes("i")
	) {
		resetCalculator();
	} else if (display.textContent.length > 1) {
		display.textContent = display.textContent.slice(0, -1);
		if (firstNumber.boolean == true) {
			theInput = theInput.slice(0, -1);
		} else if (firstNumber.boolean == false) {
			theInput2 = theInput2.slice(0, -1);
		}
	}
});

oneToNineButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if (buttonsOn == true) {
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
		}
	});
});

zeroButton.addEventListener("click", () => {
	if (buttonsOn == true) {
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
	}
});

decimalPointButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (display.textContent.includes(".")) {
		} else if (display.textContent.length < 13) {
			display.textContent += ".";
			if (firstNumber.boolean == true) {
				theInput += ".";
			} else if (secondNumber.boolean == true) {
				theInput2 += ".";
			}
		}
	}
});

const add = function (a, b) {
	return a + b;
};
const subtract = function (a, b) {
	return a - b;
};
const divide = function (a, b) {
	if (b != 0) {
		return a / b;
	} else {
		let errors = ["haha", "impossible", "infinity"];
		return errors[Math.floor(Math.random() * 3)];
	}
};
const multiply = function (a, b) {
	return a * b;
};
const operate = function (a, operand, b) {
	return operand(a, b);
};

plusButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = add;
		}
	}
});

minusButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = subtract;
		}
	}
});

timesButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = multiply;
		}
	}
});

divideButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = divide;
		}
	}
});

equalSignButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			if (firstNumber.boolean == false && secondNumber.boolean == true) {
				secondNumber.value = Number(theInput2);
				results.output = operate(
					firstNumber.value,
					operand,
					secondNumber.value
				);
				let displayed = results.output.toString();
				if (displayed.length > 13) {
					displayed = displayed.slice(0, 13);
				}
				display.textContent = displayed;

				if (displayed.includes("a") || displayed.includes("i")) {
					buttonsOn = false;
				}
			}
		}
	}
});

let testresults = operate(7, multiply, 900);
test.textContent = testresults.toString(16);
