const convertToCelsius = function (fehrenheit) {

  let celc = (fehrenheit - 32) * (5 / 9);

  return Math.round(celc * 10) / 10;
};

const convertToFahrenheit = function (celc) {
  return Math.round((celc * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
