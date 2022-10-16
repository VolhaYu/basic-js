const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  // console.log(arr);
  let newArr = arr;
  let discardN = '--discard-next';
  let discardP = '--discard-prev';
  let doubleN = '--double-next';
  let doubleP = '--double-prev';

  for (let i = 0; i < newArr.length; i++) {
    if( newArr.includes(discardN) && newArr.includes(discardP)) {
      console.log(( newArr.includes(discardN) && newArr.includes(discardP)))
        let ind = newArr.indexOf(discardP);
        newArr.splice(ind, 1);   
    }
    if( newArr.includes(discardN) && newArr.includes(doubleP)) {
      console.log(( newArr.includes(discardN) && newArr.includes(doubleP)))
        let ind = newArr.indexOf(doubleP);
        newArr.splice(ind, 1);   
    }
    if(newArr[i] === discardN) {
      newArr.splice(i, 2);
    }    
    if(newArr[i] === discardP) {
        newArr.splice(i-1, 2);   
    }
    if(newArr[i] === doubleN) {
      newArr.splice(i, 1, newArr[i+1]);
    }
    if(newArr[i] === doubleP) {
      newArr.splice(i, 1, newArr[i-1]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
