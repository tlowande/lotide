const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(array) {
  let result = array.slice(1);
  return result;
};



module.exports = tail