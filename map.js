
const words = ["ground", "control", "to", "major", "tom"];
//const numbers = [1, 2, 3, 4, 5, , 6]

let map = function(array, callback){
 let newArray = [];
  for(let element of array){
    newArray.push(callback(element))
  }
  return newArray; 
};

const results1 = map(words, word => word[0]);

//const results1 = map(numbers, x => x/2)
console.log(results1);


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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])