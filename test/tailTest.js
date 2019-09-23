const assertEqual = require('../assertEqual')
const tail = require('../tail')
const assert = require("chai").assert;

// const result = tail(["Lighthouse", "Labs"]); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const empty = [];
// tail(empty); // no need to capture the return value since we are not checking it
// assertEqual(empty.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const tailed = tail(words)
    assert.deepEqual(tailed,['Lighthouse', 'Labs']);
  });
  // it("returns 'Lighthouse", "Labs' for words.length", () => {
  //   const words = ["Yo Yo", "Lighthouse", "Labs"];
  //   tail(words);
  //   assert.strictEqual(head(['5']), '5'); 
  // });
  // it("returns 5 for [5,4,7]", () => {
  //   assert.strictEqual(head([5,4,7]), 5); 
  // });
  // it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
  //   assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  // });

});