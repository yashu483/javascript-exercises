const convertToCelsius = function(fahrenheit) {
  let convertedValue = (fahrenheit - 32) * ( 5 / 9) ;
  let result = Math.round(convertedValue * 10) / 10 ;
return result ;
};

const convertToFahrenheit = function(celsius) { 
  let convertedValue = (celsius * (9/5)) + 32 ;
  let result = Math.round(convertedValue * 10) / 10 ;
  return result ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
