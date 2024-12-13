const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, num) => {
    total += num;
    return total;
  }, 0)

};

const multiply = function (arr) {
  return arr.reduce((total, num) => {
    total *= num;
    return total;
  }, 1);

};

const power = function (num1, num2) {
  let sum = 1;
  for (i = 0; i < num2; i++) {
    sum *= num1;
  }
  return sum;
};

const factorial = function (num) {
  if (num === 0) return 1;

  let total = 1;
  for (i = num; i > 0; i--) {
    total *= i;
  }
  return total;
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
