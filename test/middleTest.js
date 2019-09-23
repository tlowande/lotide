const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const assert = require("chai").assert;

// TEST CODE
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]),[]); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]

describe("#middle", () => {
  it("returns an empty array for array.length < 3", () => {
    const realMiddle = middle([1])
    assert.deepEqual(realMiddle, []);
  });
  it("returns an empty array for array.length < 3", () => {
    const realMiddle = middle([1, 2])
    assert.deepEqual(realMiddle, []);
  });
  it("returns the middle number for an array.length  === odd", () => {
    const realMiddle = middle([1, 2, 3])
    assert.deepEqual(realMiddle, [2]);
  });
  it("returns the 2 middle numbers for an array.length  === even", () => {
    const realMiddle = middle([1, 2, 3, 4])
    assert.deepEqual(realMiddle, [2, 3]);
  });
});