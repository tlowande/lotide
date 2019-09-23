
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

let without = function (source, itemsToRemove) {
  let cleanArray = source;
  for (let e = 0; e < itemsToRemove.length; e++) {;
    if (source.includes(itemsToRemove[e])) {
      let index = source.indexOf(itemsToRemove[e]);
      cleanArray.splice(index, 1);
    }
  }
  return cleanArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
