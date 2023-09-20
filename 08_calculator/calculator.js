const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
  let sum = 0;
  values.forEach(element => {
    sum = sum + element;    
  });
  return sum;	
};

const multiply = function(values) {
  let solution = 1;
  values.forEach(element => {
    solution = solution * element;
  })
  return solution;
};

const power = function(a, b) {
  return a**b

};

const factorial = function() {
	
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

console.log(multiply([1,2,3,4,5]));
