const convertToCelsius = function(number) {
  let numberCel = (number - 32) * (5/9);
  let rounded = Math.round(numberCel * 10) / 10
  return rounded
};

const convertToFahrenheit = function(number) {
  let numberFar = (number * (9/5)) +32;
  let rounded = Math.round(numberFar * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// var rounded = Math.round(number * 10) / 10
