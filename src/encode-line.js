const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length === 0) {
    return '';
  };
  let newStr = [];
  let count = 1;
  let value = str[0];
  for (let i = 1; i < str.length; i++) {
    if(str[i] !== value) {
      if(count === 1) {
        newStr.push(value);
      } else {
        newStr.push(count, value);
      }
      count = 1;
      value = str[i];
    }else {
      count++;
    }
  }
  if(count === 1) {
    newStr.push(value);
  } else {
    newStr.push(count, value);
  }   
 return newStr.join('');

}

module.exports = {
  encodeLine
};
