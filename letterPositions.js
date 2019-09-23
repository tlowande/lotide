// Assertion Function
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
//continue here
let assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅✅✅Assertion Passed');
  } else {
    console.log('🛑🛑🛑Assertion Failed');
  }
};

//Actual Code
const letterPositions = function (string) {
  const object = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (object[string[i]]) {
        object[string[i]].push(i);
      } else {
        object[string[i]] = [i];
      }
    }
  }
  return object;
}

console.log(letterPositions("lighthouse in the house"));


assertArraysEqual(letterPositions("hello").e, [1]);
//

// for (let letter of string) {
//   if (letter !== ' ') {
//     let index = string.indexOf(letter)
//     if (object[letter]) {
//       object[letter].push(index);
//     } else {
//       object[letter] = [index];
//     }