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

let buttonsOn = true;
let firstNumber = { value: null, boolean: true };
let operand = null;
let secondNumber = { value: null, boolean: false };
let results = null;
let validResults = true;
let displayed = null;

function resetCalculator() {
	display.textContent = "0";
	theInput = "";
	theInput2 = "";
	buttonsOn = true;
	firstNumber.value = null;
	firstNumber.boolean = true;
	operand = null;
	secondNumber.value = null;
	secondNumber.boolean = false;
	results = null;
	validResults = true;
	displayed = null;
}

clearButton.addEventListener("click", resetCalculator);

deleteButton.addEventListener("click", () => {
	if (
		(display.textContent.length == 1 && display.textContent !== "0") ||
		display.textContent.includes("a") ||
		display.textContent.includes("i")
	) {
		resetCalculator();
	} else if (display.textContent.length > 1 && buttonsOn == true) {
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
			} else if (firstNumber.boolean == false) {
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
			} else if (firstNumber.boolean == false) {
				theInput2 += ".";
			}
		}
	}
});

plusButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "" && operand == null) {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = add;
		}
	}
	if (buttonsOn == false && validResults == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = add;
			buttonsOn = true;
		}
	}
	if (theInput2 !== "" && operand !== null) {
		let resultString = checkDecimalPlaces(
			operate(+theInput, operand, +theInput2)
		);

		display.textContent = display.textContent.replace(
			display.textContent,
			resultString
		);
		theInput = resultString.toString();
		theInput2 = "";
		operand = add;
		firstNumber.boolean = false;
		secondNumber.boolean = false;
		firstNumber.value = Number(theInput);
	}
});

minusButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "" && operand == null) {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = subtract;
		}
	}
	if (buttonsOn == false && validResults == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = subtract;
			buttonsOn = true;
		}
	}
	if (theInput2 !== "" && operand !== null) {
		let resultString = checkDecimalPlaces(
			operate(+theInput, operand, +theInput2)
		);

		display.textContent = display.textContent.replace(
			display.textContent,
			resultString
		);
		theInput = resultString.toString();
		theInput2 = "";
		operand = subtract;
		firstNumber.boolean = false;
		secondNumber.boolean = false;
		firstNumber.value = Number(theInput);
	}
});

timesButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "" && operand == null) {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = multiply;
		}
	}
	if (buttonsOn == false && validResults == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = multiply;
			buttonsOn = true;
		}
	}
	if (theInput2 !== "" && operand !== null) {
		let resultString = checkDecimalPlaces(
			operate(+theInput, operand, +theInput2)
		);

		display.textContent = display.textContent.replace(
			display.textContent,
			resultString
		);
		theInput = resultString.toString();
		theInput2 = "";
		operand = multiply;
		firstNumber.boolean = false;
		secondNumber.boolean = false;
		firstNumber.value = Number(theInput);
	}
});

divideButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "" && operand == null) {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = divide;
		}
	}
	if (buttonsOn == false && validResults == true) {
		if (theInput !== "") {
			firstNumber.value = Number(theInput);
			firstNumber.boolean = false;
			operand = divide;
			buttonsOn = true;
		}
	}
	if (theInput2 !== "" && operand !== null) {
		let resultString = checkDecimalPlaces(
			operate(+theInput, operand, +theInput2)
		);

		display.textContent = display.textContent.replace(
			display.textContent,
			resultString
		);
		theInput = resultString.toString();
		theInput2 = "";
		operand = divide;
		firstNumber.boolean = false;
		secondNumber.boolean = false;
		firstNumber.value = Number(theInput);
	}
});

equalSignButton.addEventListener("click", () => {
	if (buttonsOn == true) {
		if (theInput !== "") {
			if (firstNumber.boolean == false && secondNumber.boolean == true) {
				secondNumber.value = Number(theInput2);
				results = checkDecimalPlaces(
					operate(firstNumber.value, operand, secondNumber.value)
				);
				displayed = results.toString();
				if (displayed.length > 13) {
					displayed = "in console";
					console.log(results);
				}
				display.textContent = displayed;
				buttonsOn = false;
				theInput = display.textContent;
				theInput2 = "";
				firstNumber.value = null;
				operand = null;
				secondNumber.boolean = false;
				secondNumber.value = null;
				if (displayed.includes("a") || displayed.includes("i")) {
					buttonsOn = false;
					validResults = false;
				}
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
const multiply = function (a, b) {
	return a * b;
};
const divide = function (a, b) {
	if (b != 0) {
		return a / b;
	} else {
		let errors = ["haha", "impossible", "infinity"];
		return errors[Math.floor(Math.random() * 3)];
	}
};
const operate = function (a, operand, b) {
	return operand(a, b);
};

function checkDecimalPlaces(number) {
	let numberString = number.toString();
	if (numberString.indexOf(".") !== -1) {
		let decimalIndex = numberString.indexOf(".");
		let decimalPart = numberString.substring(decimalIndex + 1);
		if (decimalPart.length > 4) {
			return Number(number.toFixed(4));
		} else if (decimalPart.length < 4) {
			return number;
		}
	} else {
		return number;
	}
}
let testresults = operate(7, multiply, 900);
test.textContent = testresults.toString(16);
