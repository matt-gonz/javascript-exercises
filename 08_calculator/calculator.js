const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(myArray) {
	return myArray.reduce((total, current) => total + current, 0);
};

const multiply = function(myArray) {
  return myArray.length 
    ? myArray.reduce((total, nextItem) => total * nextItem)
    : 0;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if (n === 0){
    return 1;
  }
	let total = 1;
  for (let i = n; i > 0; i++){
    total *= n;
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
