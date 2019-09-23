

let middle = function(array) {
  // let midNum = [];
  if(array.length === 1 || array.length === 2){
    return [];
  }else if(array.length % 2 !== 0){
    const midIndex = Math.floor(array.length / 2);
    // midNum.push(array[midIndex]);
    return [array[midIndex]];
  }else if(array.length % 2 === 0){
    const midIndex = (array.length / 2) - 1
    // midNum.push(array[midIndex]);
    // midNum.push(array[midIndex +1]);
    return [array[midIndex], array[midIndex +1]]
  }
  // return midNum;
};

module.exports = middle