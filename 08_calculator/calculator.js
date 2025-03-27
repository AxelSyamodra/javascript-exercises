const add = function(...numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0);
};

const subtract = function(...numbers) {
	return numbers[0] - numbers[1];
};

const sum = function(...numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue , 1);
};

const power = function(...numbers) {
	return Math.pow(numbers[0], numbers[1]);
};

const factorial = function(...numbers) {
  let result = 1;
	if (numbers[0] === 1 || 0) {
    return result;
  } else {
        for (let i = 1; i <= numbers[0]; i++) {
            result *= i;
        }
        return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
