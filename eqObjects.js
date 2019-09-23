// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let isTrue = '';
    for (let element in object1) {
      
      if(Array.isArray(object1[element])){

       isTrue = eqArrays(object1[element], object2[element]);

      } else {
        
        if (object2[element]) {
          object2[element] === object1[element] ? isTrue = true : isTrue = false
        }
      } 
    }
    return isTrue;

  } else {
    return false
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// //testing with primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3", d: "3" };
assertEqual(eqObjects(ab, abc), false);

const abcd = { a: "1", d: "3", b: "2", c: "3" };
assertEqual(eqObjects(abc, abcd), true);

//testing with array values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);