const takeUntil = function (array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element) === true) {
      return newArray;
    }
    newArray.push(element);
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//_________________


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

assertArraysEqual([ 1, 2, 5, 7, 2 ], [ 1, 2, 5, 7, 2 ]);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], [ 'I\'ve', 'been', 'to', 'Hollywood' ]);