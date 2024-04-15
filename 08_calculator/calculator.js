const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function (numbers) {
  let result = 1;
  numbers.forEach(number => {
    result *= number;
  });
  return result;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = num;
    for (i = 1; i < num; i++) {
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
  factorial,
};
