
let eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


// Assertion Function
let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅✅✅Assertion Passed');
  } else {
    console.log('🛑🛑🛑Assertion Failed');
  }
};

let flatten = function (array) {
  let flatten = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let e = 0; e < array[i].length; e++) {
        flatten.push(array[i][e]);
      }
    } else {
      flatten.push(array[i])
    }
  }
  return flatten;
};

console.log(flatten([1, 2, [3, 4], 5, [6], 5, [5, 4], []]));