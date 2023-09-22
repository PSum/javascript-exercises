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

const factorial = function(value) {
  let result=1;
  for(let i = 1; i <= value; i++){
    result = result * i;
    console.log(i)
  }
	return result;
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


factorial(4);
