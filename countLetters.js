// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(string){
  const object = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (object[letter]) {
        object[letter] += 1;
      } else {
        object[letter] = 1;
      }
    }
  }
  return object;
}

console.log(countLetters("lighthouse in the house"));
