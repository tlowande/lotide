const eqArrays = require ('./eqArrays');


// Assertion Function
let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅✅✅Assertion Passed');
  } else {
    console.log('🛑🛑🛑Assertion Failed');
  }
};

module.exports = assertArraysEqual;