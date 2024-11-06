const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (array) {
  let result = 0;
  array.map((value) => result += value);
  return result;
};

const multiply = function (array) {
  let result = 1
  array.map((value) => result *= value);
  return result;
};

const power = function (base, power) {
  let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (number) {
  let result;
  if (number === 0) {
    return 1;
  }
  else {
    for (let i = number - 1; i >= 1; i--) {
      number = number * i ;
    }
    return number ;
  };
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
